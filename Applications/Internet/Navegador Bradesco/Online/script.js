include(["engines", "wine", "quick_script", "online_installer_script"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("Navegador Bradesco")
            .editor("Bradesco)
            .applicationHomepage("https://navegadorexclusivo.bradesco/media/windows/instalador/Instalador.exe")
            .author("Leandro Stanger")
            .url("https://formadeacesso.bradesco.com.br")
            .checksum("f53e026444bbc3fc502ff233d07ea716a91320ec")
            .category("Development")
            .executable("Instalador.exe")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
