import React from 'react'
import { TabBar } from 'antd-mobile';
import Home from '../Home/Home';
import Smart from '../Smart/Smart';
import Shop from '../Shop/Shop';
import My from '../My/My'


export default class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab'
        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#bdbdbd"
                    tintColor="#3fcccb"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="First"
                        icon={<i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-shouye'></i>}
                        selectedIcon={<i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-shouye'></i>}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                    >
                        <Home/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-linggan'></i>
                        }
                        selectedIcon={
                            <i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-linggan'></i>
                        }
                        title="灵感"
                        key="Smart"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                    >
                        <Smart/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-shangcheng'></i>
                        }
                        selectedIcon={
                            <i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-shangcheng'></i>
                        }
                        title="商城"
                        key="Shop"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <Shop/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-wode'></i>}
                        selectedIcon={<i style={{lineHeight:'22px',fontSize:22}} className='iconfont icon-wode'></i>}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <My/>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}