include(["engines", "wine", "quick_script", "online_installer_script"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("UCINET")
            .editor("UCINET")
            .applicationHomepage("https://sites.google.com/site/ucinetsoftware")
            .author("Quentin PÂRIS")
            .url("http://www.analytictech.net/Setup32UCI6681.exe")
            .category("Development")
            .executable("Setup32UCI6681.exe")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
