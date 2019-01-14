include(["engines", "wine", "quick_script", "zip_script"]);

var installerImplementation = {
    run: function () {
        new ZipScript()
            .name("Photoshop CC")
            .editor("Adobe")
            .applicationHomepage("creative.adobe.com")
            .author("Leandro Stanger")
            .url("http://bit.ly/PSCC2015_5_1_Win64")
            .checksum("2bd50532fb4ca82896309e91bf1e3b4c06dac56b")
            .category("Graphics")
            .executable("AdobePatchInstaller.exe")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
