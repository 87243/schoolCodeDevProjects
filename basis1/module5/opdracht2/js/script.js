let appelPrijs = 1;
let peerPrijs = 2;
let banaanPrijs = 3;
let appelAantal = 0;
let peerAantal = 0;
let banaanAantal = 0;
let totaalPrijsAppel = 0;
let totaalPrijsPeer = 0;
let totaalPrijsBanaan = 0;
let totaalPrijs = 0;

// Producten aantal:
function productenAantal(inputType, type, product){
    // Input type:
    //     Button:
    if (inputType == 'button'){
        // Type:
        //     Plus:
        if (type == 'plus'){
            // Product:
            //     Appel:
            if (product == 'appel'){
                appelAantal = parseInt(appelAantal) + 1;
                totaalPrijsAppel += appelPrijs;
                document.getElementById("totaal_appel").innerHTML = `<input type="text" value="${appelAantal}" id="aantalAppelInput" oninput="productenAantal('textField', '', 'appel')">`;
            }
            //     Peer:
            if (product == 'peer'){
                peerAantal = parseInt(peerAantal) + 1;
                totaalPrijsPeer += peerPrijs;
                document.getElementById("totaal_peer").innerHTML = `<input type="text" value="${peerAantal}" id="aantalPeerInput" oninput="productenAantal('textField', '', 'peer')">`;
            }
            //     Banaan:
            if (product == 'banaan'){
                banaanAantal = parseInt(banaanAantal) + 1;
                totaalPrijsBanaan += banaanPrijs;
                document.getElementById("totaal_banaan").innerHTML = `<input type="text" value="${banaanAantal}" id="aantalBanaanInput" oninput="productenAantal('textField', '', 'banaan')">`;
            }
        }
        //     Min:
        if (type == 'min'){
            // Product:
            //     Appel:
            if (product == 'appel'){
                if (parseInt(appelAantal) - 1 < 0){
                    window.alert("Dit kan niet.");
                    return;
                }
                appelAantal = parseInt(appelAantal) - 1;
                totaalPrijsAppel -= appelPrijs;
                document.getElementById("totaal_appel").innerHTML = `<input type="text" value="${appelAantal}" id="aantalAppelInput" oninput="productenAantal('textField', '', 'appel')">`;
            }
            //     Peer:
            if (product == 'peer'){
                if (parseInt(peerAantal) - 1 < 0){
                    window.alert("Dit kan niet.");
                    return;
                }
                peerAantal = parseInt(peerAantal) - 1;
                totaalPrijsPeer -= peerPrijs;
                document.getElementById("totaal_peer").innerHTML = `<input type="text" value="${peerAantal}" id="aantalPeerInput" oninput="productenAantal('textField', '', 'peer')">`;
            }
            //     Banaan:
            if (product == 'banaan'){
                if (parseInt(banaanAantal) - 1 < 0){
                    window.alert("Dit kan niet.");
                    return;
                }
                banaanAantal = parseInt(banaanAantal) - 1;
                totaalPrijsBanaan -= banaanPrijs;
                document.getElementById("totaal_banaan").innerHTML = `<input type="text" value="${banaanAantal}" id="aantalBanaanInput" oninput="productenAantal('textField', '', 'banaan')">`;
            }
        }
    }
    //     Text field:
    if (inputType == 'textField'){
        // Product:
        //     Appel:
        if (product == 'appel'){
            if (isNaN(parseInt(document.getElementById("aantalAppelInput").value)) == true){
                window.alert("Dit kan niet.");
                return;
            }
            appelAantal = parseInt(document.getElementById("aantalAppelInput").value);
            totaalPrijsAppel = appelAantal * appelPrijs;
            document.getElementById("totaal_appel").innerHTML = `<input type="text" value="${appelAantal}" id="aantalAppelInput" oninput="productenAantal('textField', '', 'appel')">`;
        }
        //     Peer:
        if (product == 'peer'){
            if (isNaN(parseInt(document.getElementById("aantalPeerInput").value)) == true){
                window.alert("Dit kan niet.");
                return;
            }
            peerAantal = parseInt(document.getElementById("aantalPeerInput").value);
            totaalPrijsPeer = peerAantal * peerPrijs;
            document.getElementById("totaal_peer").innerHTML = `<input type="text" value="${peerAantal}" id="aantalPeerInput" oninput="productenAantal('textField', '', 'peer')">`;
        }
        //     Banaan:
        if (product == 'banaan'){
            if (isNaN(parseInt(document.getElementById("aantalBanaanInput").value)) == true){
                window.alert("Dit kan niet.");
                return;
            }
            banaanAantal = parseInt(document.getElementById("aantalBanaanInput").value);
            totaalPrijsBanaan = banaanAantal * banaanPrijs;
            document.getElementById("totaal_banaan").innerHTML = `<input type="text" value="${banaanAantal}" id="aantalBanaanInput" oninput="productenAantal('textField', '', 'banaan')">`;
        }
    }
    // Totaal optelling:
    totaalOptelling();
}

// Totaal optelling:
function totaalOptelling(){
    document.getElementById("totaalPrijs_appel").innerHTML = '<input type="text" value="'+totaalPrijsAppel+'">';
    document.getElementById("totaalPrijs_peer").innerHTML = '<input type="text" value="'+totaalPrijsPeer+'">';
    document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="text" value="'+totaalPrijsBanaan+'">';
    totaalPrijs = totaalPrijsAppel + totaalPrijsPeer + totaalPrijsBanaan;
    document.getElementById("totaalPrijs").innerHTML = '<input type="text" value="'+totaalPrijs+'">';
}