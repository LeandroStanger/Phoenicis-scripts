include(["engines", "wine", "quick_script", "online_installer_script"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("IMG Tool")
            .editor("gtagarage.com")
            .applicationHomepage("https://download.gtanet.com/gtagarage/files/90/imgtool20.zip?st=DkB0ekKcvBAlYudouG1vWw&e=1547377721)
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
