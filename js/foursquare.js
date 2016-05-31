function getLastCheckinData()
{
	var url = 'https://api.jh0.eu/swarm/';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
