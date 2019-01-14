
include(["engines", "wine", "quick_script", "zip_script"]);

var installerImplementation = {
    run: ZipScript () {
        new OnlineInstallerScript()
            .name("Photoshop CC")
            .editor("Adobe")
            .applicationHomepage("creative.adobe.com")
            .author("Leandro Stanger")
            .url("http://download.adobe.com/pub/adobe/photoshop/win/cc/Win64/Photoshop_CC_2014_15_2_4_ftr.zip")
            .checksum("2bd50532fb4ca82896309e91bf1e3b4c06dac56b")
            .category("Graphics")
            .executable("AdobePatchInstaller.exe")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
