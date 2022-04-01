import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import approve from '../../images/approved-but.png';
import distributed from '../../images/distributed.png';

export default () => (
    <Tabs>
        <TabList>
            <Tab>STAKE</Tab>
            <Tab>FARM</Tab>
            <Tab>CLOSED</Tab>
        </TabList>

        <TabPanel>
            <div className='staketabbg'>
                <div className='lock-d'>
                    <h5>Lock Duration</h5>
                </div>
                <div className='lock-d-wrap'>
                    <div className='lock-list'>
                        <div className='lock-list'><a href='#'>7 Days</a></div>
                        <div className='lock-list'><a href='#'>14 Days</a></div>
                        <div className='lock-list'><a href='#'>30 Days</a></div>
                        <div className='lock-list'><a href='#'>60 Days</a></div>
                    </div>
                    <div className='lock-list-butn'><a href='#'>7 Days</a></div>
                </div>
                <div className='approve-sec-wrap'>
                    <ul className='approve-list'>
                        <li>
                            <h5>Your Stacked amount </h5>
                            <p>0 SFUND</p>
                        </li>
                        <li>
                            <h5>APY rate </h5>
                            <p>5%</p>
                        </li>
                        <li>
                            <h5>Maturity Date </h5>
                            <p>02/22</p>
                        </li>
                        <li>
                            <h5>Balance </h5>
                            <p> 0.0000 SFUND</p>
                        </li>
                        </ul>
                    </div>
            </div>
            <div className='appro-butn'>
                <a href='#'><img src={approve}></img></a>
                </div>
        </TabPanel>
        <TabPanel>
        <div className='farmtabbg'>
                <div className='p-detail'>
                    <h5>Pool Details</h5>
                </div>
                <div className='p-detail-wrap'>
                    <ul className='p-detail-list'>
                        <li>
                            <div className='p-list-s'>
                                <p>APY</p>
                                <p>148.33 %</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>REWARD PER MINUTE</p>
                                <p>12.09267 SFUND</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>UNLOCKS IN</p>
                                <p>7 DAYS</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>YOUR STAKE</p>
                                <p>-</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>POOL SHARE</p>
                                <p>-</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>PARTICIPANTS</p>
                                <p></p>
                            </div>
                        </li>
                        <li>
                             <div className='distrib-token'>
                                 <p>DISTRIBUTED TOKENS</p>
                                 <p>1,533,773.603 / 1,925,000</p>
                            </div>
                            <div className='distr-img'>
                                <img src={distributed}></img></div>
                        </li>
                    </ul>
                </div>
                <div className='view-wrap'>
                    <div className='view-cont'>
                        <h5>Balance</h5>
                        <p> 0 Cake-LP</p>
                        </div>
                    <div className='view-butn'>
                        <a href='#'>View Pool</a>
                    </div>
                </div>
            </div>
            <div className='appro-butn'>
                <a href='#'><img src={approve}></img></a>
                </div>
        </TabPanel>
        <TabPanel>
        <div className='farmtabbg'>
                <div className='p-detail'>
                    <h5>Pool Details</h5>
                </div>
                <div className='p-detail-wrap'>
                    <ul className='p-detail-list'>
                        <li>
                            <div className='p-list-s'>
                                <p>APY</p>
                                <p>148.33 %</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>REWARD PER MINUTE</p>
                                <p>12.09267 SFUND</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>UNLOCKS IN</p>
                                <p>7 DAYS</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>YOUR STAKE</p>
                                <p>-</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>POOL SHARE</p>
                                <p>-</p>
                            </div>
                        </li>
                        <li>
                            <div className='p-list-s'>
                                <p>PARTICIPANTS</p>
                                <p></p>
                            </div>
                        </li>
                        <li>
                             <div className='distrib-token'>
                                 <p>DISTRIBUTED TOKENS</p>
                                 <p>1,533,773.603 / 1,925,000</p>
                            </div>
                            <div className='distr-img'>
                                <img src={distributed}></img></div>
                        </li>
                    </ul>
                </div>
                <div className='view-wrap'>
                    <div className='view-cont'>
                        <h5>Balance</h5>
                        <p> 0 Cake-LP</p>
                        </div>
                    <div className='view-butn'>
                        <a href='#'>View Pool</a>
                    </div>
                </div>
            </div>
            <div className='appro-butn'>
                <a href='#'><img src={approve}></img></a>
                </div>
        </TabPanel>
    </Tabs>
);