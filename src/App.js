import JSON from './SCP.json';

const assignment1 = JSON.map(

  (scp) => {
    return(
      <div className='card card-body p-3 border shadow'>
        <h1 className='card-title'>{scp.header}</h1>
        <h2 className='card-title'>{scp.title}</h2>
        <img src={scp.image} alt="scp" className='card-img-top shadow w-25'></img>
        <h5 className='card-title'>{scp.procedure}</h5>
        <p className='card-text'>{scp.procedure_text}</p>
        <h5 className='card-title'>{scp.description}</h5>
        <p className='card-text'>{scp.description_text}</p>
        <h5 className='card-title'>{scp.reference}</h5>
        <p className='card-text'>{scp.reference_text}</p>
      </div>
    );
  }

);


function App() {
  return ( 
    <div>
      {assignment1}
    </div>
  );
}
    



export default App;
