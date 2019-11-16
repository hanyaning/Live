import React, { Component } from 'react'
import '../Home/home.css'
import { Flex, WhiteSpace } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';


const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}></div>
);
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            imageData: ['first_02.jpg', 'first_03.jpg'],
        }
    }

    render() {
        return (
            <div>
                <div className='homeNav'>
                    住吧家居
                </div>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.imageData.map(val => (

                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={require('./images/' + `${val}`)}
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
                <div className='homeClassify'>
                    <Flex justify="center">
                        <PlaceHolder className="inline" style={{background:`url(${require('./images/first_06.jpg')})`,backgroundSize:'120px 120px'}} />
                        <PlaceHolder className="inline" style={{background:`url(${require('./images/first_08.jpg')})`,backgroundSize:'120px 120px'}} />
                        <PlaceHolder className="inline" style={{background:`url(${require('./images/first_10.jpg')})`,backgroundSize:'120px 120px'}}/>
                    </Flex>
                </div>

                <div className='homePublish'>
                    <p>
                        <span>|</span>
                        热门推荐
                            </p>
                </div>
                <div className='home_bottom'>
                    <img src={require('./images/first_15.jpg')} />
                </div>
            </div>
        )
    }
}
