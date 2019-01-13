include(["engines", "wine", "quick_script", "zip_script"]);

var installerImplementation = {
    run: function () {
        new ZipScript()
            .name("IMG Tool")
            .editor("gtagarage.com")
            .applicationHomepage("https://www.gtagarage.com/mods/download.php?f=90")
            .author("Leandro Stanger")
            .url("https://www.gtagarage.com/mods/download.php?f=90")
            .checksum("9d4d1727c976a06c670dd7a00771de3f375b22ea")
            .category("Development")
            .executable("IMGTool.exe")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
