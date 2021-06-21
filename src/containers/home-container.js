import {Button} from 'antd'
import {Header} from './styles'
import {Link} from 'react-router-dom'
import CoinPricing from '../components/CoinPricing'
import ChartData from '../components/ChartData'
import HomeBlock from '../components/HomeBlock'
import LeftBlock from '../components/HomeBlock/left'
import { test2, test1, test3, test4 } from './example.block'
const HomeContainer = () => {
    return (
        <div>
            <Header>
                <h1>Buy & sell Crypto with DOXA</h1>
                <h2>Join the world's largest crypto exchange with us</h2>
                <Link to="/register">
                    <Button type="primary">Register now</Button>
                </Link>
            </Header>
            <CoinPricing />
            <ChartData />
            <HomeBlock {...test1} />
            <LeftBlock {...test2} />
            <HomeBlock {...test3} />
            <LeftBlock {...test4} />
        </div>
    )
}

export default HomeContainer