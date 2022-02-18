import polygonImage from '../../assets/icons/polygon.svg';
import arrowBottomImage from '../../assets/icons/arrow-bottom.svg';
import '../landing/style.scss';
function Transaction() {
    return (
      <div className="transaction-wrapper">
        <div className='transaction-title'>Transactions</div>
        <div className='transaction-body'>
          <div className='balances'>
            <div className='total-value'>
              8,5732<span> TEST</span><br/>
              <span className='description'>Total Claimed</span>
            </div>
            <div className='total-value'>
              24<span> USD</span><br/>
              <span className='description'>Total Claimed</span>
            </div>
          </div>
          <div className='transaction-history'>
            <table>
              <thead>
                <tr>
                  <td>Asset</td>
                  <td>Amount</td>
                  <td>Total Value</td>
                  <td>Time<img src={arrowBottomImage} alt="" /></td>
                  <td>Polygonscan</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
                <tr>
                  <td>TEST TOKEN</td>
                  <td>2324</td>
                  <td>$73.04k</td>
                  <td>1 minute ago</td>
                  <td><img src={polygonImage} alt='' /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default Transaction;