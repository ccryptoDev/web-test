import './style.scss';
import ClaimBox from './claimbox'
import Transaction from './transaction'
function Landing() {
    return (
      <>
        <div className='effect'></div>
        <div className="container">
          <div className='title'>Claiming Tokens</div>
          <ClaimBox />
          <Transaction />
        </div>
      </>
    );
  }
  
  export default Landing;