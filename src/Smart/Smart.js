import React, { Component } from 'react'
import '../Smart/Smart.css'
import { Flex, WhiteSpace } from 'antd-mobile';



const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        <div className='smart_box'>
            <img className='smart_image' src={require('../Home/images/girl.png')}/>
            <span className='smart_span'>橙色律动</span>
            <img className='smart_image2' src={require('../Home/images/love.png')}/>
        </div>
    </div>
);
export default class Smart extends Component {
    render() {
        return (
            <div>
                <div className='smartNav'>
                    <p>
                        灵感
                    <img src={require('../Home/images/购物车.png')} />
                    </p>
                </div>
                <div className='smartList'>
                    <ul>
                        <li style={{ color: '#3fcccb' }}>推荐</li>
                        <li>冬季</li>
                        <li>宜家</li>
                        <li>小清新</li>
                        <li>小户型</li>
                        <li>个性色彩</li>
                        <li>彪</li>
                        <button className='smart_btn' style={{ backgroundColor: '#ffffff', border: 'none', width: '30px', height: '40px', fontSize: '24px' }}>+</button>
                    </ul>
                </div>
                <div className='smart_content'>
                    <div className='smart_List1'>
                        <Flex>
                            <Flex.Item><PlaceHolder style={{background:`url(${require('../Home/images/smart_07.jpg')})`,backgroundSize:'150px 150px',position:'relative'}} /></Flex.Item>
                            <Flex.Item><PlaceHolder style={{background:`url(${require('../Home/images/smart_07.jpg')})`,backgroundSize:'150px 150px',position:'relative'}} /></Flex.Item>
                        </Flex>
                    </div>
                    <div className='smart_List1'>
                        <Flex>
                            <Flex.Item><PlaceHolder style={{background:`url(${require('../Home/images/smart_07.jpg')})`,backgroundSize:'150px 150px',position:'relative'}} /></Flex.Item>
                            <Flex.Item><PlaceHolder style={{background:`url(${require('../Home/images/smart_07.jpg')})`,backgroundSize:'150px 150px',position:'relative'}} /></Flex.Item>
                        </Flex>
                    </div>
                    <div className='smart_List1'>
                        <Flex>
                            <Flex.Item><PlaceHolder style={{background:`url(${require('../Home/images/smart_07.jpg')})`,backgroundSize:'150px 150px',position:'relative'}} /></Flex.Item>
                            <Flex.Item><PlaceHolder style={{background:`url(${require('../Home/images/smart_07.jpg')})`,backgroundSize:'150px 150px',position:'relative'}} /></Flex.Item>
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
