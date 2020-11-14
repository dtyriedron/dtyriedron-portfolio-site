import Project from '../components/Project';

function PortfolioPage(){
    var url = new URL(window.location.href);
	var param = url.searchParams.get("pos");
    return(
        <Project pos={param}/>
    );
}
export default PortfolioPage;