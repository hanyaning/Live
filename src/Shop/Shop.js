import React, { Component } from 'react'
import '../Shop/shop.css'
import { Carousel, WingBlank } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import { Flex } from 'antd-mobile';
import { bold } from 'ansi-colors';


const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder2`} {...restProps}>
    </div>
);
const PlaceHolder4 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder5`} {...restProps}>
    </div>
);
const PlaceHolder1 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder3`} {...restProps}>
    </div>
);
const PlaceHolder2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder4`} {...restProps}>
        <span style={{ fontSize: '11px', marginTop: '10px' }}>Top Art Studio 欧式风格精细...</span>
        <span style={{ fontWeight: bold }}>￥39.95</span>
    </div>
);
const PlaceHolder3 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder4`} {...restProps}>
        <span style={{ fontSize: '11px', marginTop: '10px' }}>顺顺工艺欧式风格塑料外框黑...</span>
        <span style={{ fontWeight: bold }}>￥ 83.99</span>
    </div>
);
export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            imgDatas: ['second_02.jpg', 'first_02.jpg', 'first_03.jpg', 'first_02.jpg']
        }
    }
    render() {
        return (
            <div>
                <div className='smartNav'>
                    <p>
                        商城
                    <img src={require('../Home/images/购物车.png')} />
                    </p>
                </div>
                <div className='shop_nav'>
                    <div className='shop_list'>
                        <img className='shop_list_img' src={require('../Home/images/open.png')} />
                        <SearchBar style={{ width: '300px', height: '50px', backgroundColor: 'black', opacity: '0.5', float: 'left' }} placeholder="Search" maxLength={8} />
                    </div>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.imgDatas.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: 200 }}
                            >
                                <img
                                    src={require('../Home/images/' + `${val}`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div className='shopList'>
                    <Flex>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/desk.png')}) no-repeat`, backgroundColor: '#fc5588', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/bed.png')}) no-repeat`, backgroundColor: '#3bc7fe', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/chair.png')}) no-repeat`, backgroundColor: '#fdad44', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/chaji.png')}) no-repeat`, backgroundColor: '#62cdcd', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/guizi.png')}) no-repeat`, backgroundColor: '#fd3938', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                    </Flex>
                    <div className='shopList_message'>
                        <ul>
                            <li style={{ marginLeft: '26px' }}>桌</li>
                            <li style={{ marginLeft: '65px' }}>床</li>
                            <li style={{ marginLeft: '65px' }}>椅</li>
                            <li style={{ marginLeft: '63px' }}>几</li>
                            <li style={{ marginLeft: '63px' }}>柜</li>
                        </ul>
                    </div>
                </div>
                <div className='shopList'>
                    <Flex>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/book.png')}) no-repeat`, backgroundColor: '#4e4ef8', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/sofa.png')}) no-repeat`, backgroundColor: '#ae1cff', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/um.png')}) no-repeat`, backgroundColor: '#22e076', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/shanzi.png')}) no-repeat`, backgroundColor: '#8980c1', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder style={{ background: `url(${require('../Home/images/class.png')}) no-repeat`, backgroundColor: '#76757b', backgroundSize: '40px 40px', backgroundPosition: 'center' }} /></Flex.Item>
                    </Flex>
                    <div className='shopList_message'>
                        <ul>
                            <li style={{ marginLeft: '25px' }}>书架</li>
                            <li style={{ marginLeft: '48px' }}>沙发</li>
                            <li style={{ marginLeft: '35px' }}>家居饰品</li>
                            <li style={{ marginLeft: '20px' }}>户外家具</li>
                            <li style={{ marginLeft: '20px' }}>全部分类</li>
                        </ul>
                    </div>
                </div>
                <div className='shop_bottom'>
                    <Flex>
                        <Flex.Item><PlaceHolder1 style={{ background: `url(${require('../Home/images/cup_05.jpg')})`, backgroundSize: '160px 130px' }} /></Flex.Item>
                        <Flex.Item><PlaceHolder1 style={{ background: `url(${require('../Home/images/plant_05.jpg')})`, backgroundSize: '160px 130px' }} /></Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item><PlaceHolder2 /></Flex.Item>
                        <Flex.Item><PlaceHolder3 /></Flex.Item>
                    </Flex>
                    <div className='bottom_img'>
                        <Flex justify="center">
                            <PlaceHolder4 style={{ background: `url(${require('../Home/images/bed_05.jpg')}) no-repeat`, backgroundSize: '300px 170px' }} className="inline" />
                        </Flex>
                    </div>
                </div>

            </div>
        )
    }
}
