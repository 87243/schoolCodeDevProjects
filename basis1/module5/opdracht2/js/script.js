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
        document.getElementById("totaal_appel").innerHTML = `<input type="number" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
        document.getElementById("totaalPrijs_appel").innerHTML = '<input type="number" value="'+totaalPrijsAppel+'">';
    }
    if (product == "peer"){
        peerAantal += 1;
        totaalPrijsPeer += peerPrijs;
        totaalPrijs += peerPrijs;
        document.getElementById("totaal_peer").innerHTML = `<input type="number" value="${peerAantal}" id="aantalPeerInput" oninput="productInput('peer')">`;
        document.getElementById("totaalPrijs_peer").innerHTML = '<input type="number" value="'+totaalPrijsPeer+'">';
    }
    if (product == "banaan"){
        banaanAantal += 1;
        totaalPrijsBanaan += banaanPrijs;
        totaalPrijs += banaanPrijs;
        document.getElementById("totaal_banaan").innerHTML = `<input type="number" value="${banaanAantal}" id="aantalBanaanInput" oninput="productInput('banaan')">`;
        document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="number" value="'+totaalPrijsBanaan+'">';
    }
    document.getElementById("totaalPrijs").innerHTML = '<input type="number" value="'+totaalPrijs+'">';
}

function productMin(product){
    if (product == "appel"){
        appelAantal -= 1;
        totaalPrijsAppel -= appelPrijs;
        totaalPrijs -= appelPrijs;
        document.getElementById("totaal_appel").innerHTML = `<input type="number" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
        document.getElementById("totaalPrijs_appel").innerHTML = '<input type="number" value="'+totaalPrijsAppel+'">';
    }
    if (product == "peer"){
        peerAantal -= 1;
        totaalPrijsPeer -= peerPrijs;
        totaalPrijs -= peerPrijs;
        document.getElementById("totaal_peer").innerHTML = `<input type="number" value="${peerAantal}" id="aantalPeerInput" oninput="productInput('peer')">`;
        document.getElementById("totaalPrijs_peer").innerHTML = '<input type="number" value="'+totaalPrijsPeer+'">';
    }
    if (product == "banaan"){
        banaanAantal -= 1;
        totaalPrijsBanaan -= banaanPrijs;
        totaalPrijs -= banaanPrijs;
        document.getElementById("totaal_banaan").innerHTML = `<input type="number" value="${banaanAantal}" id="aantalBanaanInput" oninput="productInput('banaan')">`;
        document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="number" value="'+totaalPrijsBanaan+'">';
    }
    document.getElementById("totaalPrijs").innerHTML = '<input type="number" value="'+totaalPrijs+'">';
}

function productInput(product){
    // Appel:
    if (product == "appel"){
        appelAantal = document.getElementById("aantalAppelInput").valueAsNumber;
        totaalPrijsAppel = appelAantal * appelPrijs;
        document.getElementById("totaal_appel").innerHTML = `<input type="number" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
        document.getElementById("totaalPrijs_appel").innerHTML = '<input type="number" value="'+totaalPrijsAppel+'">';
    }
    // Peer:
    if (product == "peer"){
        peerAantal = document.getElementById("aantalPeerInput").valueAsNumber;
        totaalPrijsPeer = peerAantal * peerPrijs;
        document.getElementById("totaal_peer").innerHTML = `<input type="number" value="${peerAantal}" id="aantalPeerInput" oninput="productInput('peer')">`;
        document.getElementById("totaalPrijs_peer").innerHTML = '<input type="number" value="'+totaalPrijsPeer+'">';
    }
    // Banaan:
    if (product == "banaan"){
        banaanAantal = document.getElementById("aantalBanaanInput").valueAsNumber;
        totaalPrijsBanaan = banaanAantal * banaanPrijs;
        document.getElementById("totaal_banaan").innerHTML = `<input type="number" value="${banaanAantal}" id="aantalBanaanInput" oninput="productInput('banaan')">`;
        document.getElementById("totaalPrijs_banaan").innerHTML = '<input type="number" value="'+totaalPrijsBanaan+'">';
    }
    // Bereken:
    totaalPrijs = totaalPrijsAppel + totaalPrijsPeer + totaalPrijsBanaan;
    document.getElementById("totaalPrijs").innerHTML = '<input type="number" value="'+totaalPrijs+'">';
}

function productInputButton(){
    // Appel:
    appelAantal = document.getElementById("aantalAppelInput").valueAsNumber;
    totaalPrijsAppel = appelAantal * appelPrijs;
    document.getElementById("totaal_appel").innerHTML = `<input type="number" value="${appelAantal}" id="aantalAppelInput" oninput="productInput('appel')">`;
    document.getElementById("totaalPrijs_appel").innerHTML = '<input type="number" value="'+totaalPrijsAppel+'">';
    // Peer:
    // ...
    // Banaan:
    // ...
    // Bereken:
    totaalPrijs = totaalPrijsAppel + totaalPrijsPeer + totaalPrijsBanaan;
    document.getElementById("totaalPrijs").innerHTML = '<input type="number" value="'+totaalPrijs+'">';
}