import "./styles.scss"
import { PiExportDuotone } from "react-icons/pi";
import { sales } from "../../utils";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import MapChart from "../../components/MapChart";
import DoughnutChart from "../../components/DoughnutChart";

const View = () => {

    return (
        <section className='View'>
            {/* First Row */}
            <div className="row">
                <div className="col">
                    <header>
                        <div className="title">
                            <p>Today's Sales</p>
                            <p>Sales Summary</p>
                        </div>
                        <div className="btn">
                            <button className="button-4" role="button"><PiExportDuotone /> Export</button>
                        </div>
                    </header>
                    <div className="card_container">
                        {sales.map((item, i) => (
                            <div
                                className="card"
                                key={i}
                                style={{ background: item.accentLight }}
                            >
                                <div style={{ background: item.accent }}><i><item.icon size={15} /></i> </div>
                                <p className="amount">{item.name === "Total Sales" ? `$${item.amount}k` : item.amount}</p>
                                <p style={{ color: "gray" }}>{item.name}</p>
                                <p>+{item.increase}% from yesterday</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        <p>Visitor's Insight</p>
                    </div>
                    <LineChart />
                </div>
            </div>

            {/* Second Row */}
            <div className="row">
                <div className="col">
                    <div className="title">
                        <p>Total Revenue</p>
                    </div>
                    <BarChart />
                </div>
                <div className="col">
                    <div className="title">
                        <p>Customer Satisfaction</p>
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        <p>Target vs Reality</p>
                    </div>
                </div>
            </div>


            {/* Last Row */}
            <div className="row">
                <div className="col">
                    <div className="title">
                        <p>Top Products</p>
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        <p>Sales Mapping by Country</p>
                    </div>
                    <MapChart />
                </div>
                <div className="col">
                    <div className="title">
                        <p>Volume vs Service Level</p>
                    </div>
                    <DoughnutChart />
                </div>
            </div>

        </section>
    )
}

export default View