use tauri::Manager;
use window_vibrancy::apply_acrylic;

mod query;
mod steam;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // We do anything here that needs to be done before the app starts
    // and only once per launch. This includes initializing the appdata
    // directory and getting rid of IDB databases that are no longer needed.
    // We could also intialize steamworks here, but its better to have the
    // front end do it so we can show a user friendly error message if it fails.
    // If init_appdata() fails, its a major problem
    let e = query::init_appdata();
    match e {
        Ok(_) => {}
        Err(e) => {
            panic!("Error initializing appdata: {}", e);
        }
    }

    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_process::init())
        .invoke_handler(tauri::generate_handler![
            steam::steam_init_api,
            steam::steam_reinit_api,
            steam::steam_start_daemon,
            steam::steam_get_user_id,
            steam::steam_get_user_avi,
            steam::steam_get_user_display_name,
            steam::steam_get_mod_info,
            steam::steam_get_installed_mods,
            steam::mdq_start_daemon,
            steam::mdq_clear,
            steam::mdq_mod_add,
            steam::mdq_mod_remove,
            steam::mdq_active_download_id,
            steam::mdq_active_download_progress,
            query::get_server_info,
            query::get_server_list,
            query::update_server_info_semaphore,
            query::destroy_server_info_semaphore,
            query::fetch,
        ])
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();

            #[cfg(target_os = "windows")]
            apply_acrylic(&window, Some((18, 18, 18, 85)))
                .expect("Unsupported platform! 'apply_acrylic' is only supported on Windows");

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
