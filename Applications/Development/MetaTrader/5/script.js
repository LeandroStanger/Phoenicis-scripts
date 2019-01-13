include(["engines", "wine", "quick_script", "online_installer_script"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("MetaTrader 5")
            .editor("metatrader5.com")
            .applicationHomepage("https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe")
            .author("Leandro Stanger")
            .url("https://www.metatrader5.com")
            .checksum("0e1ef6accbbbfec304a0177d7953f859dd412f78")
            .category("Development")
            .executable("mt5setup.exe")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
