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

function productPlus(product){
    if (product == "appel"){
        appelAantal += 1;
        totaalPrijsAppel += appelPrijs;
        totaalPrijs += appelPrijs;
        document.getElementById("totaal_appel").innerHTML = `<input type="text" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
        document.getElementById("totaalPrijs_appel").innerHTML = '<input type="text" value="'+totaalPrijsAppel+'">';
    }
    if (product == "peer"){
        peerAantal += 1;
        totaalPrijsPeer += peerPrijs;
        totaalPrijs += peerPrijs;
        document.getElementById("totaal_peer").innerHTML = `<input type="text" value="${peerAantal}" id="aantalPeerInput" oninput="productInput('peer')">`;
        document.getElementById("totaalPrijs_peer").innerHTML = '<input type="text" value="'+totaalPrijsPeer+'">';
    }
    if (product == "banaan"){
        banaanAantal += 1;
        totaalPrijsBanaan += banaanPrijs;
        totaalPrijs += banaanPrijs;
        document.getElementById("totaal_banaan").innerHTML = `<input type="text" value="${banaanAantal}" id="aantalBanaanInput" oninput="productInput('banaan')">`;
        document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="text" value="'+totaalPrijsBanaan+'">';
    }
    document.getElementById("totaalPrijs").innerHTML = '<input type="text" value="'+totaalPrijs+'">';
}

function productMin(product){
    if (product == "appel"){
        if (appelAantal - 1 < 0){
            window.alert("Bro dit kan niet he, fuck jouw stupid.");
            return;
        }
        appelAantal -= 1;
        totaalPrijsAppel -= appelPrijs;
        totaalPrijs -= appelPrijs;
        document.getElementById("totaal_appel").innerHTML = `<input type="text" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
        document.getElementById("totaalPrijs_appel").innerHTML = '<input type="text" value="'+totaalPrijsAppel+'">';
    }
    if (product == "peer"){
        if (peerAantal - 1 < 0){
            window.alert("Bro dit kan niet he, fuck jouw stupid.");
            return;
        }
        peerAantal -= 1;
        totaalPrijsPeer -= peerPrijs;
        totaalPrijs -= peerPrijs;
        document.getElementById("totaal_peer").innerHTML = `<input type="text" value="${peerAantal}" id="aantalPeerInput" oninput="productInput('peer')">`;
        document.getElementById("totaalPrijs_peer").innerHTML = '<input type="text" value="'+totaalPrijsPeer+'">';
    }
    if (product == "banaan"){
        if (banaanAantal - 1 < 0){
            window.alert("Bro dit kan niet he, fuck jouw stupid.");
            return;
        }
        banaanAantal -= 1;
        totaalPrijsBanaan -= banaanPrijs;
        totaalPrijs -= banaanPrijs;
        document.getElementById("totaal_banaan").innerHTML = `<input type="text" value="${banaanAantal}" id="aantalBanaanInput" oninput="productInput('banaan')">`;
        document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="text" value="'+totaalPrijsBanaan+'">';
    }
    document.getElementById("totaalPrijs").innerHTML = '<input type="text" value="'+totaalPrijs+'">';
}

function productInput(product){
    // Appel:
    if (product == "appel"){
        if (isNaN(parseInt(document.getElementById("aantalAppelInput").value)) == true){
            window.alert("Bro doe normaal.");
            return;
        }
        appelAantal = document.getElementById("aantalAppelInput").value;
        totaalPrijsAppel = appelAantal * appelPrijs;
        document.getElementById("totaal_appel").innerHTML = `<input type="text" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
        document.getElementById("totaalPrijs_appel").innerHTML = '<input type="text" value="'+totaalPrijsAppel+'">';
    }
    // Peer:
    if (product == "peer"){
        if (isNaN(parseInt(document.getElementById("aantalPeerInput").value)) == true){
            window.alert("Bro doe normaal.");
            return;
        }
        peerAantal = document.getElementById("aantalPeerInput").value;
        totaalPrijsPeer = peerAantal * peerPrijs;
        document.getElementById("totaal_peer").innerHTML = `<input type="text" value="${peerAantal}" id="aantalPeerInput" oninput="productInput('peer')">`;
        document.getElementById("totaalPrijs_peer").innerHTML = '<input type="text" value="'+totaalPrijsPeer+'">';
    }
    // Banaan:
    if (product == "banaan"){
        if (isNaN(parseInt(document.getElementById("aantalBanaanInput").value)) == true){
            window.alert("Bro doe normaal.");
            return;
        }
        banaanAantal = document.getElementById("aantalBanaanInput").value;
        totaalPrijsBanaan = banaanAantal * banaanPrijs;
        document.getElementById("totaal_banaan").innerHTML = `<input type="text" value="${banaanAantal}" id="aantalBanaanInput" oninput="productInput('banaan')">`;
        document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="text" value="'+totaalPrijsBanaan+'">';
    }
    // Bereken:
    totaalPrijs = totaalPrijsAppel + totaalPrijsPeer + totaalPrijsBanaan;
    document.getElementById("totaalPrijs").innerHTML = '<input type="text" value="'+totaalPrijs+'">';
}