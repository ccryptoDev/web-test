import web3 from 'web3';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { claimReward, getClaimableAmount } from '../../utils/api';
import contractImage from '../../assets/icons/contract-image.svg';
import polygonImage from '../../assets/icons/polygon.svg';
import '../landing/style.scss';
function Landing() {
  const [amount, setAmount] = useState(0)
  const { userAddress } = useSelector(
    (state) => state.user
  );
  const getClaimAmount = async () => {
    if(userAddress){
      const amount = await getClaimableAmount(userAddress);
      console.log(amount);
      setAmount(Number(web3.utils.fromWei(amount, 'ether')))
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getClaimAmount()
    }, 5000);
    return () => clearInterval(interval);
  }, [userAddress]);

  return (
    <div className="claim-wrapper">
      <div className='claim-title'>Tokens Available For Claiming</div>
      <div className='claim-body'>
        <img src={contractImage} alt='' />
        <div>
          <div className='contract-title'>Contact</div>
          <div className='contract-address'>
            0xa6f79B60359f141df90A0C745125B131cAAfFD12
            <img src={polygonImage} alt="" />
          </div>
        </div>
        <div>
          <div className='claimable-title'>Claimable</div>
          <div className='claimable-amount'>{amount}<span> test</span></div>
        </div>
        <button className='claim-btn' onClick={() => claimReward(userAddress)}>Claim Tokens</button>
      </div>
    </div>
  );
}
  
export default Landing;