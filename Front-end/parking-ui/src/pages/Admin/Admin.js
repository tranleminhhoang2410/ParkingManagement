import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { getAllVehicleTypesApi } from '~/services/vehicleTypeService';

const cx = classNames.bind(styles);

function Admin() {
    const [priceTable, setPriceTable] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);
    useEffect(() => {
        const getPriceTable = async () => {
            const price = await getAllVehicleTypesApi();
            setPriceTable(price);
        };
        getPriceTable();
    }, []);

    return (
        <div className={cx('wrapper', 'mt-4')}>
            <div className={cx('statistic')}>
                <div className={cx('row')}>
                    <div className={cx('col-xl-4')}>
                        <div className={cx('overflow-hidden', 'card', 'mb-4')}>
                            <div className={cx('bg-primary', 'bg-soft')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-7')}>
                                        <div className={cx('p-3')}>
                                            <h5 className={cx('font-size-15', 'text-white')}>Welcome Back !</h5>
                                            <p className={cx('font-size-12', 'text-white')}>Parking Dashboard</p>
                                        </div>
                                    </div>
                                    <div className={cx('col-5', 'align-self-end')}>
                                        <img
                                            src={require('~/assets/images/profile-img.png')}
                                            alt="avatar"
                                            className={cx('img-fluid')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('pt-0', 'card-body')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-sm-4')}>
                                        <div className={cx('avatar-md', 'profile-user-wid', 'mb-4')}>
                                            <img
                                                src={require('~/assets/images/avatar-1.jpg')}
                                                alt="avatar-1"
                                                className={cx('img-thumbnail', 'rounded-circle')}
                                            />
                                        </div>
                                        <h5 className={cx('font-size-15', 'text-truncate')}>Hoang Tran</h5>
                                        <p className={cx('text-muted', 'mb-0', 'text-truncate')}>UI/UX Designer</p>
                                    </div>
                                    <div className={cx('col-sm-8')}>
                                        <div className={cx('pt-4')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-6')}>
                                                    <h5 className={cx('font-size-15')}>125</h5>
                                                    <p className={cx('text-muted', 'mb-0')}>Projects</p>
                                                </div>
                                                <div className={cx('col-6')}>
                                                    <h5 className={cx('font-size-15')}>$1245</h5>
                                                    <p className={cx('text-muted', 'mb-0')}>Revenue</p>
                                                </div>
                                            </div>
                                            <div className={cx('mt-4')}>
                                                <Button
                                                    to="/admin/profile"
                                                    className={cx('btn', 'btn-primary', 'btn-profile')}
                                                >
                                                    View Profile <i className={cx('mdi', 'mdi-arrow-right', 'ms-1')} />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <div className={cx('card-body')}>
                                <h5 className={cx('mb-4', 'h4', 'card-title')}>Monthly Earning</h5>
                                <div className={cx('row')}>
                                    <div className={cx('col-sm-6')}>
                                        <p className={cx('text-muted')}>This month</p> <h3>$34,252</h3>
                                        <p className={cx('text-muted')}>
                                            <span className={cx('text-success', 'me-2')}>
                                                12% <i className={cx('mdi', 'mdi-arrow-up')} />
                                            </span>
                                            From previous period
                                        </p>
                                    </div>
                                    <div className={cx('col-sm-6')}>
                                        <div className={cx('mt-4', 'mt-sm-0')} style={{ position: 'relative' }}>
                                            <div>
                                                <div
                                                    id={cx('apexcharts8tbbovi9')}
                                                    className={cx(
                                                        'apexcharts-canvas',
                                                        'apexcharts8tbbovi9',
                                                        'apexcharts-theme-light',
                                                    )}
                                                    style={{ width: 173, height: '168.525px' }}
                                                >
                                                    <svg
                                                        id={cx('SvgjsSvg3406')}
                                                        width={173}
                                                        height={168.52499999999998}
                                                        className={cx('apexcharts-svg')}
                                                        style={{ background: 'transparent' }}
                                                    >
                                                        <g
                                                            id={cx('SvgjsG3408')}
                                                            className={cx('apexcharts-inner', 'apexcharts-graphical')}
                                                            transform="translate(-0.5, 0)"
                                                        >
                                                            <defs id={cx('SvgjsDefs3407')}>
                                                                <clipPath id={cx('gridRectMask8tbbovi9')}>
                                                                    <rect
                                                                        id={cx('SvgjsRect3410')}
                                                                        width={182}
                                                                        height={200}
                                                                        x={-3}
                                                                        y={-1}
                                                                        rx={0}
                                                                        ry={0}
                                                                        opacity={1}
                                                                        strokeWidth={0}
                                                                        stroke="none"
                                                                        strokeDasharray={0}
                                                                        fill="#fff"
                                                                    />
                                                                </clipPath>
                                                                <clipPath id={cx('gridRectMarkerMask8tbbovi9')}>
                                                                    <rect
                                                                        id="SvgjsRect3411"
                                                                        width={180}
                                                                        height={202}
                                                                        x={-2}
                                                                        y={-2}
                                                                        rx={0}
                                                                        ry={0}
                                                                        opacity={1}
                                                                        strokeWidth={0}
                                                                        stroke="none"
                                                                        strokeDasharray={0}
                                                                        fill="#fff"
                                                                    />
                                                                </clipPath>
                                                                <linearGradient
                                                                    id="SvgjsLinearGradient3416"
                                                                    x1={1}
                                                                    y1={0}
                                                                    x2={0}
                                                                    y2={1}
                                                                >
                                                                    <stop
                                                                        id="SvgjsStop3417"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(242,242,242,1)"
                                                                        offset={0}
                                                                    />
                                                                    <stop
                                                                        id="SvgjsStop3418"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(206,206,206,1)"
                                                                        offset="0.5"
                                                                    />
                                                                    <stop
                                                                        id="SvgjsStop3419"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(206,206,206,1)"
                                                                        offset="0.65"
                                                                    />
                                                                    <stop
                                                                        id="SvgjsStop3420"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(242,242,242,1)"
                                                                        offset="0.91"
                                                                    />
                                                                </linearGradient>
                                                                <linearGradient
                                                                    id="SvgjsLinearGradient3428"
                                                                    x1={1}
                                                                    y1={0}
                                                                    x2={0}
                                                                    y2={1}
                                                                >
                                                                    <stop
                                                                        id="SvgjsStop3429"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(85,110,230,1)"
                                                                        offset={0}
                                                                    />
                                                                    <stop
                                                                        id="SvgjsStop3430"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(72,94,196,1)"
                                                                        offset="0.5"
                                                                    />
                                                                    <stop
                                                                        id="SvgjsStop3431"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(72,94,196,1)"
                                                                        offset="0.65"
                                                                    />
                                                                    <stop
                                                                        id="SvgjsStop3432"
                                                                        stopOpacity={1}
                                                                        stopColor="rgba(85,110,230,1)"
                                                                        offset="0.91"
                                                                    />
                                                                </linearGradient>
                                                            </defs>
                                                            <g id="SvgjsG3412" className="apexcharts-radialbar">
                                                                <g id="SvgjsG3413">
                                                                    <g id="SvgjsG3414" className="apexcharts-tracks">
                                                                        <g
                                                                            id="SvgjsG3415"
                                                                            className="apexcharts-radialbar-track apexcharts-track"
                                                                            rel={1}
                                                                        >
                                                                            <path
                                                                                id="apexcharts-radialbarTrack-0"
                                                                                d="M 50.94156838842453 125.05843161157546 A 52.40853658536585 52.40853658536585 0 1 1 125.05843161157546 125.05843161157546"
                                                                                fill="none"
                                                                                fillOpacity={1}
                                                                                stroke="rgba(242,242,242,0.85)"
                                                                                strokeOpacity={1}
                                                                                strokeLinecap="butt"
                                                                                strokeWidth="14.514512195121952"
                                                                                strokeDasharray={0}
                                                                                className="apexcharts-radialbar-area"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                    <g id="SvgjsG3422">
                                                                        <g
                                                                            id="SvgjsG3427"
                                                                            className="apexcharts-series apexcharts-radial-series"
                                                                            seriesname="SeriesxA"
                                                                            rel={1}
                                                                        >
                                                                            <path
                                                                                id="SvgjsPath3433"
                                                                                d="M 50.94156838842453 125.05843161157546 A 52.40853658536585 52.40853658536585 0 1 1 125.69954624335796 51.59397137746902"
                                                                                fill="none"
                                                                                fillOpacity="0.85"
                                                                                stroke="url(#SvgjsLinearGradient3428)"
                                                                                strokeOpacity={1}
                                                                                strokeLinecap="butt"
                                                                                strokeWidth="14.963414634146343"
                                                                                strokeDasharray={4}
                                                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                                index={0}
                                                                                j={0}
                                                                            />
                                                                        </g>
                                                                        <circle
                                                                            id="SvgjsCircle3423"
                                                                            r="40.151280487804875"
                                                                            cx={88}
                                                                            cy={88}
                                                                            className="apexcharts-radialbar-hollow"
                                                                            fill="transparent"
                                                                        />
                                                                        <g
                                                                            id="SvgjsG3424"
                                                                            className="apexcharts-datalabels-group"
                                                                            transform="translate(0, 0) scale(1)"
                                                                            style={{ opacity: 1 }}
                                                                        >
                                                                            <text
                                                                                id="SvgjsText3425"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                x={88}
                                                                                y={148}
                                                                                textAnchor="middle"
                                                                                dominantBaseline="auto"
                                                                                fontSize="13px"
                                                                                fontWeight={400}
                                                                                fill="#556ee6"
                                                                                className="apexcharts-text apexcharts-datalabel-label"
                                                                                style={{
                                                                                    fontFamily:
                                                                                        'Helvetica, Arial, sans-serif',
                                                                                }}
                                                                            >
                                                                                Series A
                                                                            </text>
                                                                            <text
                                                                                id="SvgjsText3426"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                x={88}
                                                                                y={126}
                                                                                textAnchor="middle"
                                                                                dominantBaseline="auto"
                                                                                fontSize="16px"
                                                                                fontWeight={400}
                                                                                fill="#373d3f"
                                                                                className="apexcharts-text apexcharts-datalabel-value"
                                                                                style={{
                                                                                    fontFamily:
                                                                                        'Helvetica, Arial, sans-serif',
                                                                                }}
                                                                            >
                                                                                67%
                                                                            </text>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <line
                                                                id="SvgjsLine3434"
                                                                x1={0}
                                                                y1={0}
                                                                x2={176}
                                                                y2={0}
                                                                stroke="#b6b6b6"
                                                                strokeDasharray={0}
                                                                strokeWidth={1}
                                                                className="apexcharts-ycrosshairs"
                                                            />
                                                            <line
                                                                id="SvgjsLine3435"
                                                                x1={0}
                                                                y1={0}
                                                                x2={176}
                                                                y2={0}
                                                                strokeDasharray={0}
                                                                strokeWidth={0}
                                                                className="apexcharts-ycrosshairs-hidden"
                                                            />
                                                        </g>
                                                        <g id="SvgjsG3409" className="apexcharts-annotations" />
                                                    </svg>
                                                    <div className="apexcharts-legend" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-xl-8')}>
                        <div className={cx('row')}>
                            <div className={cx('col-md-4')}>
                                <div className={cx('mini-stats-wid', 'card')}>
                                    <div className={cx('card-body')}>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('flex-grow-1')}>
                                                <p className={cx('text-muted', 'fw-medium')}>Orders</p>
                                                <h4 className={cx('mb-0')}>1,235</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'avatar-sm',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <span className={cx('avatar-title')}>
                                                    <i className={cx('bx', 'bx-copy-alt', 'font-size-24')} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}>
                                <div className={cx('mini-stats-wid', 'card')}>
                                    <div className={cx('card-body')}>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('flex-grow-1')}>
                                                <p className={cx('text-muted', 'fw-medium')}>Revenue</p>
                                                <h4 className={cx('mb-0')}>$35, 723</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'avatar-sm',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <span className={cx('avatar-title')}>
                                                    <i className={cx('bx', 'bx-archive-in', 'font-size-24')} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}>
                                <div className={cx('mini-stats-wid', 'card')}>
                                    <div className={cx('card-body')}>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('flex-grow-1')}>
                                                <p className={cx('text-muted', 'fw-medium')}>Average Price</p>
                                                <h4 className={cx('mb-0')}>$16.2</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'avatar-sm',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <span className={cx('avatar-title')}>
                                                    <i className={cx('bx', 'bx-purchase-tag-alt', 'font-size-24')} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card', 'mt-4')}>
                            <div className={cx('card-body')} style={{ position: 'relative' }}>
                                <div className={cx('d-sm-flex', 'flex-wrap')}>
                                    <h5 className={cx('card-title', 'mb-4', 'h4', 'card-title')}>Vehicles</h5>
                                </div>
                                <div className="apex-charts" style={{ minHeight: 375 }}>
                                    <div
                                        id="apexchartsn94orvjk"
                                        className="apexcharts-canvas apexchartsn94orvjk apexcharts-theme-light"
                                        style={{ width: 740, height: 360 }}
                                    >
                                        <svg
                                            id="SvgjsSvg3708"
                                            width={740}
                                            height={360}
                                            className="apexcharts-svg"
                                            transform="translate(0, 0)"
                                            style={{ background: 'transparent' }}
                                        >
                                            <foreignObject x={0} y={0} width={740} height={360}>
                                                <div
                                                    className="apexcharts-legend apexcharts-align-center position-bottom"
                                                    style={{
                                                        inset: 'auto 0px 1px',
                                                        position: 'absolute',
                                                        maxHeight: 180,
                                                    }}
                                                >
                                                    <div
                                                        className="apexcharts-legend-series"
                                                        rel={1}
                                                        seriesname="SeriesxA"
                                                        style={{ margin: '2px 5px' }}
                                                    >
                                                        <span
                                                            className="apexcharts-legend-marker"
                                                            rel={1}
                                                            style={{
                                                                background: 'rgb(85, 110, 230) !important',
                                                                color: 'rgb(85, 110, 230)',
                                                                height: 12,
                                                                width: 12,
                                                                left: 0,
                                                                top: 0,
                                                                borderWidth: 0,
                                                                borderColor: 'rgb(255, 255, 255)',
                                                                borderRadius: 2,
                                                            }}
                                                        />
                                                        <span
                                                            className="apexcharts-legend-text"
                                                            rel={1}
                                                            i={0}
                                                            style={{
                                                                color: 'rgb(55, 61, 63)',
                                                                fontSize: 12,
                                                                fontWeight: 400,
                                                                fontFamily: 'Helvetica, Arial, sans-serif',
                                                            }}
                                                        >
                                                            Series A
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="apexcharts-legend-series"
                                                        rel={2}
                                                        seriesname="SeriesxB"
                                                        style={{ margin: '2px 5px' }}
                                                    >
                                                        <span
                                                            className="apexcharts-legend-marker"
                                                            rel={2}
                                                            style={{
                                                                background: 'rgb(241, 180, 76) !important',
                                                                color: 'rgb(241, 180, 76)',
                                                                height: 12,
                                                                width: 12,
                                                                left: 0,
                                                                top: 0,
                                                                borderWidth: 0,
                                                                borderColor: 'rgb(255, 255, 255)',
                                                                borderRadius: 2,
                                                            }}
                                                        />
                                                        <span
                                                            className="apexcharts-legend-text"
                                                            rel={2}
                                                            i={1}
                                                            style={{
                                                                color: 'rgb(55, 61, 63)',
                                                                fontSize: 12,
                                                                fontWeight: 400,
                                                                fontFamily: 'Helvetica, Arial, sans-serif',
                                                            }}
                                                        >
                                                            Series B
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="apexcharts-legend-series"
                                                        rel={3}
                                                        seriesname="SeriesxC"
                                                        style={{ margin: '2px 5px' }}
                                                    >
                                                        <span
                                                            className="apexcharts-legend-marker"
                                                            rel={3}
                                                            style={{
                                                                background: 'rgb(52, 195, 143) !important',
                                                                color: 'rgb(52, 195, 143)',
                                                                height: 12,
                                                                width: 12,
                                                                left: 0,
                                                                top: 0,
                                                                borderWidth: 0,
                                                                borderColor: 'rgb(255, 255, 255)',
                                                                borderRadius: 2,
                                                            }}
                                                        />
                                                        <span
                                                            className="apexcharts-legend-text"
                                                            rel={3}
                                                            i={2}
                                                            style={{
                                                                color: 'rgb(55, 61, 63)',
                                                                fontSize: 12,
                                                                fontWeight: 400,
                                                                fontFamily: 'Helvetica, Arial, sans-serif',
                                                            }}
                                                        >
                                                            Series C
                                                        </span>
                                                    </div>
                                                </div>
                                                <style
                                                    type="text/css"
                                                    dangerouslySetInnerHTML={{
                                                        __html: '\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-left, .apexcharts-legend.position-top.apexcharts-align-left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-right, .apexcharts-legend.position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }',
                                                    }}
                                                />
                                            </foreignObject>
                                            <g
                                                id="SvgjsG3710"
                                                className="apexcharts-inner apexcharts-graphical"
                                                transform="translate(44.427978515625, 30)"
                                            >
                                                <defs id="SvgjsDefs3709">
                                                    <linearGradient
                                                        id="SvgjsLinearGradient3714"
                                                        x1={0}
                                                        y1={0}
                                                        x2={0}
                                                        y2={1}
                                                    >
                                                        <stop
                                                            id="SvgjsStop3715"
                                                            stopOpacity="0.4"
                                                            stopColor="rgba(216,227,240,0.4)"
                                                            offset={0}
                                                        />
                                                        <stop
                                                            id="SvgjsStop3716"
                                                            stopOpacity="0.5"
                                                            stopColor="rgba(190,209,230,0.5)"
                                                            offset={1}
                                                        />
                                                        <stop
                                                            id="SvgjsStop3717"
                                                            stopOpacity="0.5"
                                                            stopColor="rgba(190,209,230,0.5)"
                                                            offset={1}
                                                        />
                                                    </linearGradient>
                                                    <clipPath id="gridRectMaskn94orvjk">
                                                        <rect
                                                            id="SvgjsRect3719"
                                                            width="753.572021484375"
                                                            height="263.494"
                                                            x={-2}
                                                            y={0}
                                                            rx={0}
                                                            ry={0}
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                            fill="#fff"
                                                        />
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMaskn94orvjk">
                                                        <rect
                                                            id="SvgjsRect3720"
                                                            width="753.572021484375"
                                                            height="267.494"
                                                            x={-2}
                                                            y={-2}
                                                            rx={0}
                                                            ry={0}
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                            fill="#fff"
                                                        />
                                                    </clipPath>
                                                </defs>
                                                <rect
                                                    id="SvgjsRect3718"
                                                    width="9.369650268554688"
                                                    height="263.494"
                                                    x="463.53565419514973"
                                                    y={0}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    strokeDasharray={3}
                                                    fill="url(#SvgjsLinearGradient3714)"
                                                    className="apexcharts-xcrosshairs"
                                                    y2="263.494"
                                                    filter="none"
                                                    fillOpacity="0.9"
                                                    x1="463.53565419514973"
                                                    x2="463.53565419514973"
                                                />
                                                <g
                                                    id="SvgjsG3764"
                                                    className="apexcharts-xaxis"
                                                    transform="translate(0, 0)"
                                                >
                                                    <g
                                                        id="SvgjsG3765"
                                                        className="apexcharts-xaxis-texts-g"
                                                        transform="translate(0, -4)"
                                                    >
                                                        <text
                                                            id="SvgjsText3767"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="31.232167561848957"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3768">Jan</tspan>
                                                            <title>Jan</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3770"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="93.69650268554688"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3771">Feb</tspan>
                                                            <title>Feb</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3773"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="156.16083780924478"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3774">Mar</tspan>
                                                            <title>Mar</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3776"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="218.6251729329427"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3777">Apr</tspan>
                                                            <title>Apr</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3779"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="281.0895080566406"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3780">May</tspan>
                                                            <title>May</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3782"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="343.55384318033856"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3783">Jun</tspan>
                                                            <title>Jun</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3785"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="406.0181783040365"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3786">Jul</tspan>
                                                            <title>Jul</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3788"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="468.48251342773443"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3789">Aug</tspan>
                                                            <title>Aug</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3791"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="530.9468485514323"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3792">Sep</tspan>
                                                            <title>Sep</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3794"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="593.4111836751301"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3795">Oct</tspan>
                                                            <title>Oct</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3797"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="655.875518798828"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3798">Nov</tspan>
                                                            <title>Nov</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText3800"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="718.3398539225259"
                                                            y="292.494"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-text apexcharts-xaxis-label "
                                                            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                        >
                                                            <tspan id="SvgjsTspan3801">Dec</tspan>
                                                            <title>Dec</title>
                                                        </text>
                                                    </g>
                                                    <line
                                                        id="SvgjsLine3802"
                                                        x1={0}
                                                        y1="264.494"
                                                        x2="749.572021484375"
                                                        y2="264.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        strokeWidth={1}
                                                    />
                                                </g>
                                                <g id="SvgjsG3817" className="apexcharts-grid">
                                                    <g id="SvgjsG3818" className="apexcharts-gridlines-horizontal">
                                                        <line
                                                            id="SvgjsLine3833"
                                                            x1={0}
                                                            y1={0}
                                                            x2="749.572021484375"
                                                            y2={0}
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine3834"
                                                            x1={0}
                                                            y1="52.698800000000006"
                                                            x2="749.572021484375"
                                                            y2="52.698800000000006"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine3835"
                                                            x1={0}
                                                            y1="105.39760000000001"
                                                            x2="749.572021484375"
                                                            y2="105.39760000000001"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine3836"
                                                            x1={0}
                                                            y1="158.09640000000002"
                                                            x2="749.572021484375"
                                                            y2="158.09640000000002"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine3837"
                                                            x1={0}
                                                            y1="210.79520000000002"
                                                            x2="749.572021484375"
                                                            y2="210.79520000000002"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine3838"
                                                            x1={0}
                                                            y1="263.494"
                                                            x2="749.572021484375"
                                                            y2="263.494"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                    </g>
                                                    <g id="SvgjsG3819" className="apexcharts-gridlines-vertical" />
                                                    <line
                                                        id="SvgjsLine3820"
                                                        x1={0}
                                                        y1="264.494"
                                                        x2={0}
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3821"
                                                        x1="62.464335123697914"
                                                        y1="264.494"
                                                        x2="62.464335123697914"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3822"
                                                        x1="124.92867024739583"
                                                        y1="264.494"
                                                        x2="124.92867024739583"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3823"
                                                        x1="187.39300537109375"
                                                        y1="264.494"
                                                        x2="187.39300537109375"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3824"
                                                        x1="249.85734049479166"
                                                        y1="264.494"
                                                        x2="249.85734049479166"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3825"
                                                        x1="312.32167561848956"
                                                        y1="264.494"
                                                        x2="312.32167561848956"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3826"
                                                        x1="374.7860107421875"
                                                        y1="264.494"
                                                        x2="374.7860107421875"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3827"
                                                        x1="437.25034586588544"
                                                        y1="264.494"
                                                        x2="437.25034586588544"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3828"
                                                        x1="499.71468098958337"
                                                        y1="264.494"
                                                        x2="499.71468098958337"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3829"
                                                        x1="562.1790161132812"
                                                        y1="264.494"
                                                        x2="562.1790161132812"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3830"
                                                        x1="624.6433512369791"
                                                        y1="264.494"
                                                        x2="624.6433512369791"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3831"
                                                        x1="687.107686360677"
                                                        y1="264.494"
                                                        x2="687.107686360677"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3832"
                                                        x1="749.5720214843749"
                                                        y1="264.494"
                                                        x2="749.5720214843749"
                                                        y2="270.494"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine3840"
                                                        x1={0}
                                                        y1="263.494"
                                                        x2="749.572021484375"
                                                        y2="263.494"
                                                        stroke="transparent"
                                                        strokeDasharray={0}
                                                    />
                                                    <line
                                                        id="SvgjsLine3839"
                                                        x1={0}
                                                        y1={1}
                                                        x2={0}
                                                        y2="263.494"
                                                        stroke="transparent"
                                                        strokeDasharray={0}
                                                    />
                                                </g>
                                                <g
                                                    id="SvgjsG3721"
                                                    className="apexcharts-bar-series apexcharts-plot-series"
                                                >
                                                    <g
                                                        id="SvgjsG3722"
                                                        className="apexcharts-series"
                                                        seriesname="SeriesxA"
                                                        rel={1}
                                                    >
                                                        <path
                                                            id="SvgjsPath3724"
                                                            d="M 26.547342427571614 263.494L 26.547342427571614 147.55664000000002Q 26.547342427571614 147.55664000000002 26.547342427571614 147.55664000000002L 35.9169926961263 147.55664000000002Q 35.9169926961263 147.55664000000002 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002L 35.9169926961263 263.494L 35.9169926961263 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 26.547342427571614 263.494L 26.547342427571614 147.55664000000002Q 26.547342427571614 147.55664000000002 26.547342427571614 147.55664000000002L 35.9169926961263 147.55664000000002Q 35.9169926961263 147.55664000000002 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002L 35.9169926961263 263.494L 35.9169926961263 263.494z"
                                                            pathfrom="M 26.547342427571614 263.494L 26.547342427571614 263.494L 35.9169926961263 263.494L 35.9169926961263 263.494L 35.9169926961263 263.494L 35.9169926961263 263.494L 35.9169926961263 263.494L 26.547342427571614 263.494"
                                                            cy="147.55664000000002"
                                                            cx="89.01167755126953"
                                                            j={0}
                                                            val={44}
                                                            barheight="115.93736000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3725"
                                                            d="M 89.01167755126953 263.494L 89.01167755126953 118.57230000000001Q 89.01167755126953 118.57230000000001 89.01167755126953 118.57230000000001L 98.38132781982422 118.57230000000001Q 98.38132781982422 118.57230000000001 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001L 98.38132781982422 263.494L 98.38132781982422 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 89.01167755126953 263.494L 89.01167755126953 118.57230000000001Q 89.01167755126953 118.57230000000001 89.01167755126953 118.57230000000001L 98.38132781982422 118.57230000000001Q 98.38132781982422 118.57230000000001 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001L 98.38132781982422 263.494L 98.38132781982422 263.494z"
                                                            pathfrom="M 89.01167755126953 263.494L 89.01167755126953 263.494L 98.38132781982422 263.494L 98.38132781982422 263.494L 98.38132781982422 263.494L 98.38132781982422 263.494L 98.38132781982422 263.494L 89.01167755126953 263.494"
                                                            cy="118.57230000000001"
                                                            cx="151.47601267496745"
                                                            j={1}
                                                            val={55}
                                                            barheight="144.92170000000002"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3726"
                                                            d="M 151.47601267496745 263.494L 151.47601267496745 155.46146000000002Q 151.47601267496745 155.46146000000002 151.47601267496745 155.46146000000002L 160.84566294352214 155.46146000000002Q 160.84566294352214 155.46146000000002 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002L 160.84566294352214 263.494L 160.84566294352214 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 151.47601267496745 263.494L 151.47601267496745 155.46146000000002Q 151.47601267496745 155.46146000000002 151.47601267496745 155.46146000000002L 160.84566294352214 155.46146000000002Q 160.84566294352214 155.46146000000002 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002L 160.84566294352214 263.494L 160.84566294352214 263.494z"
                                                            pathfrom="M 151.47601267496745 263.494L 151.47601267496745 263.494L 160.84566294352214 263.494L 160.84566294352214 263.494L 160.84566294352214 263.494L 160.84566294352214 263.494L 160.84566294352214 263.494L 151.47601267496745 263.494"
                                                            cy="155.46146000000002"
                                                            cx="213.94034779866536"
                                                            j={2}
                                                            val={41}
                                                            barheight="108.03254000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3727"
                                                            d="M 213.94034779866536 263.494L 213.94034779866536 86.95302000000001Q 213.94034779866536 86.95302000000001 213.94034779866536 86.95302000000001L 223.30999806722005 86.95302000000001Q 223.30999806722005 86.95302000000001 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001L 223.30999806722005 263.494L 223.30999806722005 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 213.94034779866536 263.494L 213.94034779866536 86.95302000000001Q 213.94034779866536 86.95302000000001 213.94034779866536 86.95302000000001L 223.30999806722005 86.95302000000001Q 223.30999806722005 86.95302000000001 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001L 223.30999806722005 263.494L 223.30999806722005 263.494z"
                                                            pathfrom="M 213.94034779866536 263.494L 213.94034779866536 263.494L 223.30999806722005 263.494L 223.30999806722005 263.494L 223.30999806722005 263.494L 223.30999806722005 263.494L 223.30999806722005 263.494L 213.94034779866536 263.494"
                                                            cy="86.95302000000001"
                                                            cx="276.4046829223633"
                                                            j={3}
                                                            val={67}
                                                            barheight="176.54098000000002"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3728"
                                                            d="M 276.4046829223633 263.494L 276.4046829223633 205.52532000000002Q 276.4046829223633 205.52532000000002 276.4046829223633 205.52532000000002L 285.77433319091796 205.52532000000002Q 285.77433319091796 205.52532000000002 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 263.494L 285.77433319091796 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 276.4046829223633 263.494L 276.4046829223633 205.52532000000002Q 276.4046829223633 205.52532000000002 276.4046829223633 205.52532000000002L 285.77433319091796 205.52532000000002Q 285.77433319091796 205.52532000000002 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 263.494L 285.77433319091796 263.494z"
                                                            pathfrom="M 276.4046829223633 263.494L 276.4046829223633 263.494L 285.77433319091796 263.494L 285.77433319091796 263.494L 285.77433319091796 263.494L 285.77433319091796 263.494L 285.77433319091796 263.494L 276.4046829223633 263.494"
                                                            cy="205.52532000000002"
                                                            cx="338.8690180460612"
                                                            j={4}
                                                            val={22}
                                                            barheight="57.968680000000006"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3729"
                                                            d="M 338.8690180460612 263.494L 338.8690180460612 150.19158000000002Q 338.8690180460612 150.19158000000002 338.8690180460612 150.19158000000002L 348.2386683146159 150.19158000000002Q 348.2386683146159 150.19158000000002 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002L 348.2386683146159 263.494L 348.2386683146159 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 338.8690180460612 263.494L 338.8690180460612 150.19158000000002Q 338.8690180460612 150.19158000000002 338.8690180460612 150.19158000000002L 348.2386683146159 150.19158000000002Q 348.2386683146159 150.19158000000002 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002L 348.2386683146159 263.494L 348.2386683146159 263.494z"
                                                            pathfrom="M 338.8690180460612 263.494L 338.8690180460612 263.494L 348.2386683146159 263.494L 348.2386683146159 263.494L 348.2386683146159 263.494L 348.2386683146159 263.494L 348.2386683146159 263.494L 338.8690180460612 263.494"
                                                            cy="150.19158000000002"
                                                            cx="401.33335316975916"
                                                            j={5}
                                                            val={43}
                                                            barheight="113.30242000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3730"
                                                            d="M 401.33335316975916 263.494L 401.33335316975916 168.63616000000002Q 401.33335316975916 168.63616000000002 401.33335316975916 168.63616000000002L 410.70300343831383 168.63616000000002Q 410.70300343831383 168.63616000000002 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002L 410.70300343831383 263.494L 410.70300343831383 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 401.33335316975916 263.494L 401.33335316975916 168.63616000000002Q 401.33335316975916 168.63616000000002 401.33335316975916 168.63616000000002L 410.70300343831383 168.63616000000002Q 410.70300343831383 168.63616000000002 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002L 410.70300343831383 263.494L 410.70300343831383 263.494z"
                                                            pathfrom="M 401.33335316975916 263.494L 401.33335316975916 263.494L 410.70300343831383 263.494L 410.70300343831383 263.494L 410.70300343831383 263.494L 410.70300343831383 263.494L 410.70300343831383 263.494L 401.33335316975916 263.494"
                                                            cy="168.63616000000002"
                                                            cx="463.7976882934571"
                                                            j={6}
                                                            val={36}
                                                            barheight="94.85784000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3731"
                                                            d="M 463.7976882934571 263.494L 463.7976882934571 126.47712000000001Q 463.7976882934571 126.47712000000001 463.7976882934571 126.47712000000001L 473.16733856201176 126.47712000000001Q 473.16733856201176 126.47712000000001 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 263.494L 473.16733856201176 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 463.7976882934571 263.494L 463.7976882934571 126.47712000000001Q 463.7976882934571 126.47712000000001 463.7976882934571 126.47712000000001L 473.16733856201176 126.47712000000001Q 473.16733856201176 126.47712000000001 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 263.494L 473.16733856201176 263.494z"
                                                            pathfrom="M 463.7976882934571 263.494L 463.7976882934571 263.494L 473.16733856201176 263.494L 473.16733856201176 263.494L 473.16733856201176 263.494L 473.16733856201176 263.494L 473.16733856201176 263.494L 463.7976882934571 263.494"
                                                            cy="126.47712000000001"
                                                            cx="526.262023417155"
                                                            j={7}
                                                            val={52}
                                                            barheight="137.01688000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3732"
                                                            d="M 526.262023417155 263.494L 526.262023417155 200.25544000000002Q 526.262023417155 200.25544000000002 526.262023417155 200.25544000000002L 535.6316736857096 200.25544000000002Q 535.6316736857096 200.25544000000002 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 263.494L 535.6316736857096 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 526.262023417155 263.494L 526.262023417155 200.25544000000002Q 526.262023417155 200.25544000000002 526.262023417155 200.25544000000002L 535.6316736857096 200.25544000000002Q 535.6316736857096 200.25544000000002 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 263.494L 535.6316736857096 263.494z"
                                                            pathfrom="M 526.262023417155 263.494L 526.262023417155 263.494L 535.6316736857096 263.494L 535.6316736857096 263.494L 535.6316736857096 263.494L 535.6316736857096 263.494L 535.6316736857096 263.494L 526.262023417155 263.494"
                                                            cy="200.25544000000002"
                                                            cx="588.7263585408529"
                                                            j={8}
                                                            val={24}
                                                            barheight="63.23856000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3733"
                                                            d="M 588.7263585408529 263.494L 588.7263585408529 216.06508000000002Q 588.7263585408529 216.06508000000002 588.7263585408529 216.06508000000002L 598.0960088094075 216.06508000000002Q 598.0960088094075 216.06508000000002 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 263.494L 598.0960088094075 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 588.7263585408529 263.494L 588.7263585408529 216.06508000000002Q 588.7263585408529 216.06508000000002 588.7263585408529 216.06508000000002L 598.0960088094075 216.06508000000002Q 598.0960088094075 216.06508000000002 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 263.494L 598.0960088094075 263.494z"
                                                            pathfrom="M 588.7263585408529 263.494L 588.7263585408529 263.494L 598.0960088094075 263.494L 598.0960088094075 263.494L 598.0960088094075 263.494L 598.0960088094075 263.494L 598.0960088094075 263.494L 588.7263585408529 263.494"
                                                            cy="216.06508000000002"
                                                            cx="651.1906936645507"
                                                            j={9}
                                                            val={18}
                                                            barheight="47.428920000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3734"
                                                            d="M 651.1906936645507 263.494L 651.1906936645507 168.63616000000002Q 651.1906936645507 168.63616000000002 651.1906936645507 168.63616000000002L 660.5603439331054 168.63616000000002Q 660.5603439331054 168.63616000000002 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002L 660.5603439331054 263.494L 660.5603439331054 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 651.1906936645507 263.494L 651.1906936645507 168.63616000000002Q 651.1906936645507 168.63616000000002 651.1906936645507 168.63616000000002L 660.5603439331054 168.63616000000002Q 660.5603439331054 168.63616000000002 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002L 660.5603439331054 263.494L 660.5603439331054 263.494z"
                                                            pathfrom="M 651.1906936645507 263.494L 651.1906936645507 263.494L 660.5603439331054 263.494L 660.5603439331054 263.494L 660.5603439331054 263.494L 660.5603439331054 263.494L 660.5603439331054 263.494L 651.1906936645507 263.494"
                                                            cy="168.63616000000002"
                                                            cx="713.6550287882486"
                                                            j={10}
                                                            val={36}
                                                            barheight="94.85784000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3735"
                                                            d="M 713.6550287882486 263.494L 713.6550287882486 137.01688000000001Q 713.6550287882486 137.01688000000001 713.6550287882486 137.01688000000001L 723.0246790568033 137.01688000000001Q 723.0246790568033 137.01688000000001 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 263.494L 723.0246790568033 263.494z"
                                                            fill="rgba(85,110,230,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 713.6550287882486 263.494L 713.6550287882486 137.01688000000001Q 713.6550287882486 137.01688000000001 713.6550287882486 137.01688000000001L 723.0246790568033 137.01688000000001Q 723.0246790568033 137.01688000000001 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 263.494L 723.0246790568033 263.494z"
                                                            pathfrom="M 713.6550287882486 263.494L 713.6550287882486 263.494L 723.0246790568033 263.494L 723.0246790568033 263.494L 723.0246790568033 263.494L 723.0246790568033 263.494L 723.0246790568033 263.494L 713.6550287882486 263.494"
                                                            cy="137.01688000000001"
                                                            cx="776.1193639119465"
                                                            j={11}
                                                            val={48}
                                                            barheight="126.47712000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                    </g>
                                                    <g
                                                        id="SvgjsG3736"
                                                        className="apexcharts-series"
                                                        seriesname="SeriesxB"
                                                        rel={2}
                                                    >
                                                        <path
                                                            id="SvgjsPath3738"
                                                            d="M 26.547342427571614 147.55664000000002L 26.547342427571614 113.30242000000001Q 26.547342427571614 113.30242000000001 26.547342427571614 113.30242000000001L 35.9169926961263 113.30242000000001Q 35.9169926961263 113.30242000000001 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 26.547342427571614 147.55664000000002L 26.547342427571614 113.30242000000001Q 26.547342427571614 113.30242000000001 26.547342427571614 113.30242000000001L 35.9169926961263 113.30242000000001Q 35.9169926961263 113.30242000000001 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002z"
                                                            pathfrom="M 26.547342427571614 147.55664000000002L 26.547342427571614 147.55664000000002L 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002L 35.9169926961263 147.55664000000002L 26.547342427571614 147.55664000000002"
                                                            cy="113.30242000000001"
                                                            cx="89.01167755126953"
                                                            j={0}
                                                            val={13}
                                                            barheight="34.254220000000004"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3739"
                                                            d="M 89.01167755126953 118.57230000000001L 89.01167755126953 57.968680000000006Q 89.01167755126953 57.968680000000006 89.01167755126953 57.968680000000006L 98.38132781982422 57.968680000000006Q 98.38132781982422 57.968680000000006 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006L 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 89.01167755126953 118.57230000000001L 89.01167755126953 57.968680000000006Q 89.01167755126953 57.968680000000006 89.01167755126953 57.968680000000006L 98.38132781982422 57.968680000000006Q 98.38132781982422 57.968680000000006 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006L 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001z"
                                                            pathfrom="M 89.01167755126953 118.57230000000001L 89.01167755126953 118.57230000000001L 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001L 98.38132781982422 118.57230000000001L 89.01167755126953 118.57230000000001"
                                                            cy="57.968680000000006"
                                                            cx="151.47601267496745"
                                                            j={1}
                                                            val={23}
                                                            barheight="60.60362000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3740"
                                                            d="M 151.47601267496745 155.46146000000002L 151.47601267496745 102.76266000000001Q 151.47601267496745 102.76266000000001 151.47601267496745 102.76266000000001L 160.84566294352214 102.76266000000001Q 160.84566294352214 102.76266000000001 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 151.47601267496745 155.46146000000002L 151.47601267496745 102.76266000000001Q 151.47601267496745 102.76266000000001 151.47601267496745 102.76266000000001L 160.84566294352214 102.76266000000001Q 160.84566294352214 102.76266000000001 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002z"
                                                            pathfrom="M 151.47601267496745 155.46146000000002L 151.47601267496745 155.46146000000002L 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002L 160.84566294352214 155.46146000000002L 151.47601267496745 155.46146000000002"
                                                            cy="102.76266000000001"
                                                            cx="213.94034779866536"
                                                            j={2}
                                                            val={20}
                                                            barheight="52.698800000000006"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3741"
                                                            d="M 213.94034779866536 86.95302000000001L 213.94034779866536 65.8735Q 213.94034779866536 65.8735 213.94034779866536 65.8735L 223.30999806722005 65.8735Q 223.30999806722005 65.8735 223.30999806722005 65.8735L 223.30999806722005 65.8735L 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 213.94034779866536 86.95302000000001L 213.94034779866536 65.8735Q 213.94034779866536 65.8735 213.94034779866536 65.8735L 223.30999806722005 65.8735Q 223.30999806722005 65.8735 223.30999806722005 65.8735L 223.30999806722005 65.8735L 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001z"
                                                            pathfrom="M 213.94034779866536 86.95302000000001L 213.94034779866536 86.95302000000001L 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001L 223.30999806722005 86.95302000000001L 213.94034779866536 86.95302000000001"
                                                            cy="65.8735"
                                                            cx="276.4046829223633"
                                                            j={3}
                                                            val={8}
                                                            barheight="21.079520000000002"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3742"
                                                            d="M 276.4046829223633 205.52532000000002L 276.4046829223633 171.27110000000002Q 276.4046829223633 171.27110000000002 276.4046829223633 171.27110000000002L 285.77433319091796 171.27110000000002Q 285.77433319091796 171.27110000000002 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 276.4046829223633 205.52532000000002L 276.4046829223633 171.27110000000002Q 276.4046829223633 171.27110000000002 276.4046829223633 171.27110000000002L 285.77433319091796 171.27110000000002Q 285.77433319091796 171.27110000000002 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002z"
                                                            pathfrom="M 276.4046829223633 205.52532000000002L 276.4046829223633 205.52532000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002L 285.77433319091796 205.52532000000002L 276.4046829223633 205.52532000000002"
                                                            cy="171.27110000000002"
                                                            cx="338.8690180460612"
                                                            j={4}
                                                            val={13}
                                                            barheight="34.254220000000004"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3743"
                                                            d="M 338.8690180460612 150.19158000000002L 338.8690180460612 79.04820000000001Q 338.8690180460612 79.04820000000001 338.8690180460612 79.04820000000001L 348.2386683146159 79.04820000000001Q 348.2386683146159 79.04820000000001 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001L 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 338.8690180460612 150.19158000000002L 338.8690180460612 79.04820000000001Q 338.8690180460612 79.04820000000001 338.8690180460612 79.04820000000001L 348.2386683146159 79.04820000000001Q 348.2386683146159 79.04820000000001 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001L 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002z"
                                                            pathfrom="M 338.8690180460612 150.19158000000002L 338.8690180460612 150.19158000000002L 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002L 348.2386683146159 150.19158000000002L 338.8690180460612 150.19158000000002"
                                                            cy="79.04820000000001"
                                                            cx="401.33335316975916"
                                                            j={5}
                                                            val={27}
                                                            barheight="71.14338000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3744"
                                                            d="M 401.33335316975916 168.63616000000002L 401.33335316975916 121.20724000000001Q 401.33335316975916 121.20724000000001 401.33335316975916 121.20724000000001L 410.70300343831383 121.20724000000001Q 410.70300343831383 121.20724000000001 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 401.33335316975916 168.63616000000002L 401.33335316975916 121.20724000000001Q 401.33335316975916 121.20724000000001 401.33335316975916 121.20724000000001L 410.70300343831383 121.20724000000001Q 410.70300343831383 121.20724000000001 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002z"
                                                            pathfrom="M 401.33335316975916 168.63616000000002L 401.33335316975916 168.63616000000002L 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002L 410.70300343831383 168.63616000000002L 401.33335316975916 168.63616000000002"
                                                            cy="121.20724000000001"
                                                            cx="463.7976882934571"
                                                            j={6}
                                                            val={18}
                                                            barheight="47.428920000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3745"
                                                            d="M 463.7976882934571 126.47712000000001L 463.7976882934571 68.50844000000001Q 463.7976882934571 68.50844000000001 463.7976882934571 68.50844000000001L 473.16733856201176 68.50844000000001Q 473.16733856201176 68.50844000000001 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 463.7976882934571 126.47712000000001L 463.7976882934571 68.50844000000001Q 463.7976882934571 68.50844000000001 463.7976882934571 68.50844000000001L 473.16733856201176 68.50844000000001Q 473.16733856201176 68.50844000000001 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001z"
                                                            pathfrom="M 463.7976882934571 126.47712000000001L 463.7976882934571 126.47712000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001L 473.16733856201176 126.47712000000001L 463.7976882934571 126.47712000000001"
                                                            cy="68.50844000000001"
                                                            cx="526.262023417155"
                                                            j={7}
                                                            val={22}
                                                            barheight="57.968680000000006"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3746"
                                                            d="M 526.262023417155 200.25544000000002L 526.262023417155 173.90604000000002Q 526.262023417155 173.90604000000002 526.262023417155 173.90604000000002L 535.6316736857096 173.90604000000002Q 535.6316736857096 173.90604000000002 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 526.262023417155 200.25544000000002L 526.262023417155 173.90604000000002Q 526.262023417155 173.90604000000002 526.262023417155 173.90604000000002L 535.6316736857096 173.90604000000002Q 535.6316736857096 173.90604000000002 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002z"
                                                            pathfrom="M 526.262023417155 200.25544000000002L 526.262023417155 200.25544000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002L 535.6316736857096 200.25544000000002L 526.262023417155 200.25544000000002"
                                                            cy="173.90604000000002"
                                                            cx="588.7263585408529"
                                                            j={8}
                                                            val={10}
                                                            barheight="26.349400000000003"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3747"
                                                            d="M 588.7263585408529 216.06508000000002L 588.7263585408529 173.90604000000002Q 588.7263585408529 173.90604000000002 588.7263585408529 173.90604000000002L 598.0960088094075 173.90604000000002Q 598.0960088094075 173.90604000000002 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 588.7263585408529 216.06508000000002L 588.7263585408529 173.90604000000002Q 588.7263585408529 173.90604000000002 588.7263585408529 173.90604000000002L 598.0960088094075 173.90604000000002Q 598.0960088094075 173.90604000000002 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002z"
                                                            pathfrom="M 588.7263585408529 216.06508000000002L 588.7263585408529 216.06508000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002L 598.0960088094075 216.06508000000002L 588.7263585408529 216.06508000000002"
                                                            cy="173.90604000000002"
                                                            cx="651.1906936645507"
                                                            j={9}
                                                            val={16}
                                                            barheight="42.159040000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3748"
                                                            d="M 651.1906936645507 168.63616000000002L 651.1906936645507 105.39760000000001Q 651.1906936645507 105.39760000000001 651.1906936645507 105.39760000000001L 660.5603439331054 105.39760000000001Q 660.5603439331054 105.39760000000001 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001L 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 651.1906936645507 168.63616000000002L 651.1906936645507 105.39760000000001Q 651.1906936645507 105.39760000000001 651.1906936645507 105.39760000000001L 660.5603439331054 105.39760000000001Q 660.5603439331054 105.39760000000001 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001L 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002z"
                                                            pathfrom="M 651.1906936645507 168.63616000000002L 651.1906936645507 168.63616000000002L 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002L 660.5603439331054 168.63616000000002L 651.1906936645507 168.63616000000002"
                                                            cy="105.39760000000001"
                                                            cx="713.6550287882486"
                                                            j={10}
                                                            val={24}
                                                            barheight="63.23856000000001"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3749"
                                                            d="M 713.6550287882486 137.01688000000001L 713.6550287882486 79.04820000000001Q 713.6550287882486 79.04820000000001 713.6550287882486 79.04820000000001L 723.0246790568033 79.04820000000001Q 723.0246790568033 79.04820000000001 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001z"
                                                            fill="rgba(241,180,76,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={1}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 713.6550287882486 137.01688000000001L 713.6550287882486 79.04820000000001Q 713.6550287882486 79.04820000000001 713.6550287882486 79.04820000000001L 723.0246790568033 79.04820000000001Q 723.0246790568033 79.04820000000001 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001z"
                                                            pathfrom="M 713.6550287882486 137.01688000000001L 713.6550287882486 137.01688000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001L 723.0246790568033 137.01688000000001L 713.6550287882486 137.01688000000001"
                                                            cy="79.04820000000001"
                                                            cx="776.1193639119465"
                                                            j={11}
                                                            val={22}
                                                            barheight="57.968680000000006"
                                                            barwidth="9.369650268554688"
                                                        />
                                                    </g>
                                                    <g
                                                        id="SvgjsG3750"
                                                        className="apexcharts-series"
                                                        seriesname="SeriesxC"
                                                        rel={3}
                                                    >
                                                        <path
                                                            id="SvgjsPath3752"
                                                            d="M 26.547342427571614 113.30242000000001L 26.547342427571614 84.31808000000001Q 26.547342427571614 84.31808000000001 26.547342427571614 84.31808000000001L 35.9169926961263 84.31808000000001Q 35.9169926961263 84.31808000000001 35.9169926961263 84.31808000000001L 35.9169926961263 84.31808000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 26.547342427571614 113.30242000000001L 26.547342427571614 84.31808000000001Q 26.547342427571614 84.31808000000001 26.547342427571614 84.31808000000001L 35.9169926961263 84.31808000000001Q 35.9169926961263 84.31808000000001 35.9169926961263 84.31808000000001L 35.9169926961263 84.31808000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001z"
                                                            pathfrom="M 26.547342427571614 113.30242000000001L 26.547342427571614 113.30242000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001L 35.9169926961263 113.30242000000001L 26.547342427571614 113.30242000000001"
                                                            cy="84.31808000000001"
                                                            cx="89.01167755126953"
                                                            j={0}
                                                            val={11}
                                                            barheight="28.984340000000003"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3753"
                                                            d="M 89.01167755126953 57.968680000000006L 89.01167755126953 13.174700000000001Q 89.01167755126953 13.174700000000001 89.01167755126953 13.174700000000001L 98.38132781982422 13.174700000000001Q 98.38132781982422 13.174700000000001 98.38132781982422 13.174700000000001L 98.38132781982422 13.174700000000001L 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 89.01167755126953 57.968680000000006L 89.01167755126953 13.174700000000001Q 89.01167755126953 13.174700000000001 89.01167755126953 13.174700000000001L 98.38132781982422 13.174700000000001Q 98.38132781982422 13.174700000000001 98.38132781982422 13.174700000000001L 98.38132781982422 13.174700000000001L 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006z"
                                                            pathfrom="M 89.01167755126953 57.968680000000006L 89.01167755126953 57.968680000000006L 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006L 98.38132781982422 57.968680000000006L 89.01167755126953 57.968680000000006"
                                                            cy="13.174700000000001"
                                                            cx="151.47601267496745"
                                                            j={1}
                                                            val={17}
                                                            barheight="44.793980000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3754"
                                                            d="M 151.47601267496745 102.76266000000001L 151.47601267496745 63.23856000000001Q 151.47601267496745 63.23856000000001 151.47601267496745 63.23856000000001L 160.84566294352214 63.23856000000001Q 160.84566294352214 63.23856000000001 160.84566294352214 63.23856000000001L 160.84566294352214 63.23856000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 151.47601267496745 102.76266000000001L 151.47601267496745 63.23856000000001Q 151.47601267496745 63.23856000000001 151.47601267496745 63.23856000000001L 160.84566294352214 63.23856000000001Q 160.84566294352214 63.23856000000001 160.84566294352214 63.23856000000001L 160.84566294352214 63.23856000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001z"
                                                            pathfrom="M 151.47601267496745 102.76266000000001L 151.47601267496745 102.76266000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001L 160.84566294352214 102.76266000000001L 151.47601267496745 102.76266000000001"
                                                            cy="63.23856000000001"
                                                            cx="213.94034779866536"
                                                            j={2}
                                                            val={15}
                                                            barheight="39.524100000000004"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3755"
                                                            d="M 213.94034779866536 65.8735L 213.94034779866536 26.349400000000003Q 213.94034779866536 26.349400000000003 213.94034779866536 26.349400000000003L 223.30999806722005 26.349400000000003Q 223.30999806722005 26.349400000000003 223.30999806722005 26.349400000000003L 223.30999806722005 26.349400000000003L 223.30999806722005 65.8735L 223.30999806722005 65.8735z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 213.94034779866536 65.8735L 213.94034779866536 26.349400000000003Q 213.94034779866536 26.349400000000003 213.94034779866536 26.349400000000003L 223.30999806722005 26.349400000000003Q 223.30999806722005 26.349400000000003 223.30999806722005 26.349400000000003L 223.30999806722005 26.349400000000003L 223.30999806722005 65.8735L 223.30999806722005 65.8735z"
                                                            pathfrom="M 213.94034779866536 65.8735L 213.94034779866536 65.8735L 223.30999806722005 65.8735L 223.30999806722005 65.8735L 223.30999806722005 65.8735L 223.30999806722005 65.8735L 223.30999806722005 65.8735L 213.94034779866536 65.8735"
                                                            cy="26.349400000000003"
                                                            cx="276.4046829223633"
                                                            j={3}
                                                            val={15}
                                                            barheight="39.524100000000004"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3756"
                                                            d="M 276.4046829223633 171.27110000000002L 276.4046829223633 115.93736000000001Q 276.4046829223633 115.93736000000001 276.4046829223633 115.93736000000001L 285.77433319091796 115.93736000000001Q 285.77433319091796 115.93736000000001 285.77433319091796 115.93736000000001L 285.77433319091796 115.93736000000001L 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 276.4046829223633 171.27110000000002L 276.4046829223633 115.93736000000001Q 276.4046829223633 115.93736000000001 276.4046829223633 115.93736000000001L 285.77433319091796 115.93736000000001Q 285.77433319091796 115.93736000000001 285.77433319091796 115.93736000000001L 285.77433319091796 115.93736000000001L 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002z"
                                                            pathfrom="M 276.4046829223633 171.27110000000002L 276.4046829223633 171.27110000000002L 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002L 285.77433319091796 171.27110000000002L 276.4046829223633 171.27110000000002"
                                                            cy="115.93736000000001"
                                                            cx="338.8690180460612"
                                                            j={4}
                                                            val={21}
                                                            barheight="55.333740000000006"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3757"
                                                            d="M 338.8690180460612 79.04820000000001L 338.8690180460612 42.159040000000005Q 338.8690180460612 42.159040000000005 338.8690180460612 42.159040000000005L 348.2386683146159 42.159040000000005Q 348.2386683146159 42.159040000000005 348.2386683146159 42.159040000000005L 348.2386683146159 42.159040000000005L 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 338.8690180460612 79.04820000000001L 338.8690180460612 42.159040000000005Q 338.8690180460612 42.159040000000005 338.8690180460612 42.159040000000005L 348.2386683146159 42.159040000000005Q 348.2386683146159 42.159040000000005 348.2386683146159 42.159040000000005L 348.2386683146159 42.159040000000005L 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001z"
                                                            pathfrom="M 338.8690180460612 79.04820000000001L 338.8690180460612 79.04820000000001L 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001L 348.2386683146159 79.04820000000001L 338.8690180460612 79.04820000000001"
                                                            cy="42.159040000000005"
                                                            cx="401.33335316975916"
                                                            j={5}
                                                            val={14}
                                                            barheight="36.889160000000004"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3758"
                                                            d="M 401.33335316975916 121.20724000000001L 401.33335316975916 92.22290000000001Q 401.33335316975916 92.22290000000001 401.33335316975916 92.22290000000001L 410.70300343831383 92.22290000000001Q 410.70300343831383 92.22290000000001 410.70300343831383 92.22290000000001L 410.70300343831383 92.22290000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 401.33335316975916 121.20724000000001L 401.33335316975916 92.22290000000001Q 401.33335316975916 92.22290000000001 401.33335316975916 92.22290000000001L 410.70300343831383 92.22290000000001Q 410.70300343831383 92.22290000000001 410.70300343831383 92.22290000000001L 410.70300343831383 92.22290000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001z"
                                                            pathfrom="M 401.33335316975916 121.20724000000001L 401.33335316975916 121.20724000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001L 410.70300343831383 121.20724000000001L 401.33335316975916 121.20724000000001"
                                                            cy="92.22290000000001"
                                                            cx="463.7976882934571"
                                                            j={6}
                                                            val={11}
                                                            barheight="28.984340000000003"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3759"
                                                            d="M 463.7976882934571 68.50844000000001L 463.7976882934571 21.079520000000002Q 463.7976882934571 21.079520000000002 463.7976882934571 21.079520000000002L 473.16733856201176 21.079520000000002Q 473.16733856201176 21.079520000000002 473.16733856201176 21.079520000000002L 473.16733856201176 21.079520000000002L 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 463.7976882934571 68.50844000000001L 463.7976882934571 21.079520000000002Q 463.7976882934571 21.079520000000002 463.7976882934571 21.079520000000002L 473.16733856201176 21.079520000000002Q 473.16733856201176 21.079520000000002 473.16733856201176 21.079520000000002L 473.16733856201176 21.079520000000002L 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001z"
                                                            pathfrom="M 463.7976882934571 68.50844000000001L 463.7976882934571 68.50844000000001L 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001L 473.16733856201176 68.50844000000001L 463.7976882934571 68.50844000000001"
                                                            cy="21.079520000000002"
                                                            cx="526.262023417155"
                                                            j={7}
                                                            val={18}
                                                            barheight="47.428920000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3760"
                                                            d="M 526.262023417155 173.90604000000002L 526.262023417155 129.11206Q 526.262023417155 129.11206 526.262023417155 129.11206L 535.6316736857096 129.11206Q 535.6316736857096 129.11206 535.6316736857096 129.11206L 535.6316736857096 129.11206L 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 526.262023417155 173.90604000000002L 526.262023417155 129.11206Q 526.262023417155 129.11206 526.262023417155 129.11206L 535.6316736857096 129.11206Q 535.6316736857096 129.11206 535.6316736857096 129.11206L 535.6316736857096 129.11206L 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002z"
                                                            pathfrom="M 526.262023417155 173.90604000000002L 526.262023417155 173.90604000000002L 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002L 535.6316736857096 173.90604000000002L 526.262023417155 173.90604000000002"
                                                            cy="129.11206"
                                                            cx="588.7263585408529"
                                                            j={8}
                                                            val={17}
                                                            barheight="44.793980000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3761"
                                                            d="M 588.7263585408529 173.90604000000002L 588.7263585408529 142.28676000000002Q 588.7263585408529 142.28676000000002 588.7263585408529 142.28676000000002L 598.0960088094075 142.28676000000002Q 598.0960088094075 142.28676000000002 598.0960088094075 142.28676000000002L 598.0960088094075 142.28676000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 588.7263585408529 173.90604000000002L 588.7263585408529 142.28676000000002Q 588.7263585408529 142.28676000000002 588.7263585408529 142.28676000000002L 598.0960088094075 142.28676000000002Q 598.0960088094075 142.28676000000002 598.0960088094075 142.28676000000002L 598.0960088094075 142.28676000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002z"
                                                            pathfrom="M 588.7263585408529 173.90604000000002L 588.7263585408529 173.90604000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002L 598.0960088094075 173.90604000000002L 588.7263585408529 173.90604000000002"
                                                            cy="142.28676000000002"
                                                            cx="651.1906936645507"
                                                            j={9}
                                                            val={12}
                                                            barheight="31.619280000000003"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3762"
                                                            d="M 651.1906936645507 105.39760000000001L 651.1906936645507 52.698800000000006Q 651.1906936645507 52.698800000000006 651.1906936645507 52.698800000000006L 660.5603439331054 52.698800000000006Q 660.5603439331054 52.698800000000006 660.5603439331054 52.698800000000006L 660.5603439331054 52.698800000000006L 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 651.1906936645507 105.39760000000001L 651.1906936645507 52.698800000000006Q 651.1906936645507 52.698800000000006 651.1906936645507 52.698800000000006L 660.5603439331054 52.698800000000006Q 660.5603439331054 52.698800000000006 660.5603439331054 52.698800000000006L 660.5603439331054 52.698800000000006L 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001z"
                                                            pathfrom="M 651.1906936645507 105.39760000000001L 651.1906936645507 105.39760000000001L 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001L 660.5603439331054 105.39760000000001L 651.1906936645507 105.39760000000001"
                                                            cy="52.698800000000006"
                                                            cx="713.6550287882486"
                                                            j={10}
                                                            val={20}
                                                            barheight="52.698800000000006"
                                                            barwidth="9.369650268554688"
                                                        />
                                                        <path
                                                            id="SvgjsPath3763"
                                                            d="M 713.6550287882486 79.04820000000001L 713.6550287882486 31.619280000000003Q 713.6550287882486 31.619280000000003 713.6550287882486 31.619280000000003L 723.0246790568033 31.619280000000003Q 723.0246790568033 31.619280000000003 723.0246790568033 31.619280000000003L 723.0246790568033 31.619280000000003L 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001z"
                                                            fill="rgba(52,195,143,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="round"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-bar-area"
                                                            index={2}
                                                            clipPath="url(#gridRectMaskn94orvjk)"
                                                            pathto="M 713.6550287882486 79.04820000000001L 713.6550287882486 31.619280000000003Q 713.6550287882486 31.619280000000003 713.6550287882486 31.619280000000003L 723.0246790568033 31.619280000000003Q 723.0246790568033 31.619280000000003 723.0246790568033 31.619280000000003L 723.0246790568033 31.619280000000003L 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001z"
                                                            pathfrom="M 713.6550287882486 79.04820000000001L 713.6550287882486 79.04820000000001L 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001L 723.0246790568033 79.04820000000001L 713.6550287882486 79.04820000000001"
                                                            cy="31.619280000000003"
                                                            cx="776.1193639119465"
                                                            j={11}
                                                            val={18}
                                                            barheight="47.428920000000005"
                                                            barwidth="9.369650268554688"
                                                        />
                                                    </g>
                                                    <g id="SvgjsG3723" className="apexcharts-datalabels" />
                                                    <g id="SvgjsG3737" className="apexcharts-datalabels" />
                                                    <g id="SvgjsG3751" className="apexcharts-datalabels" />
                                                </g>
                                                <line
                                                    id="SvgjsLine3841"
                                                    x1={0}
                                                    y1={0}
                                                    x2="749.572021484375"
                                                    y2={0}
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={0}
                                                    strokeWidth={1}
                                                    className="apexcharts-ycrosshairs"
                                                />
                                                <line
                                                    id="SvgjsLine3842"
                                                    x1={0}
                                                    y1={0}
                                                    x2="749.572021484375"
                                                    y2={0}
                                                    strokeDasharray={0}
                                                    strokeWidth={0}
                                                    className="apexcharts-ycrosshairs-hidden"
                                                />
                                                <g id="SvgjsG3843" className="apexcharts-yaxis-annotations" />
                                                <g id="SvgjsG3844" className="apexcharts-xaxis-annotations" />
                                                <g id="SvgjsG3845" className="apexcharts-point-annotations" />
                                            </g>
                                            <g
                                                id="SvgjsG3803"
                                                className="apexcharts-yaxis"
                                                rel={0}
                                                transform="translate(14.427978515625, 0)"
                                            >
                                                <g id="SvgjsG3804" className="apexcharts-yaxis-texts-g">
                                                    <text
                                                        id="SvgjsText3805"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="31.5"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-text apexcharts-yaxis-label "
                                                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                    >
                                                        <tspan id="SvgjsTspan3806">100</tspan>
                                                        <title>100</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText3807"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="84.1988"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-text apexcharts-yaxis-label "
                                                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                    >
                                                        <tspan id="SvgjsTspan3808">80</tspan>
                                                        <title>80</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText3809"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="136.8976"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-text apexcharts-yaxis-label "
                                                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                    >
                                                        <tspan id="SvgjsTspan3810">60</tspan>
                                                        <title>60</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText3811"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="189.59640000000002"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-text apexcharts-yaxis-label "
                                                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                    >
                                                        <tspan id="SvgjsTspan3812">40</tspan>
                                                        <title>40</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText3813"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="242.29520000000002"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-text apexcharts-yaxis-label "
                                                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                    >
                                                        <tspan id="SvgjsTspan3814">20</tspan>
                                                        <title>20</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText3815"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="294.994"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-text apexcharts-yaxis-label "
                                                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                                                    >
                                                        <tspan id="SvgjsTspan3816">0</tspan>
                                                        <title>0</title>
                                                    </text>
                                                </g>
                                            </g>
                                            <g id="SvgjsG3711" className="apexcharts-annotations" />
                                        </svg>
                                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                            <div className="apexcharts-yaxistooltip-text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('service', 'mt-4', 'mb-4')}>
                {/* Price table */}
                <div className={cx('row')}>
                    <div className={cx('col-lg-12')}>
                        <div className={cx('card')}>
                            <div className={cx('card-body')}>
                                <div className={cx('mb-4', 'h4', 'card-title')}>Parking Price</div>
                                <div className={cx('table-responsive')}>
                                    <table className={cx('table', 'align-middle', 'table-nowrap', 'mb-0')}>
                                        <thead className={cx('table-light')}>
                                            <tr>
                                                <th className={cx('align-middle')}>Vehicle Type Id</th>
                                                <th className={cx('align-middle')}>Vehicle Type</th>
                                                <th className={cx('align-middle')}>Price Per Hour</th>
                                                <th className={cx('align-middle')}>Price Per Day</th>
                                                <th className={cx('align-middle')}>Price Per Week</th>
                                                <th className={cx('align-middle')}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {priceTable.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <span className={cx('text-body', 'fw-bold')}>#{item.id}</span>
                                                    </td>
                                                    <td>{item.typeName}</td>
                                                    <td>
                                                        <span className={cx('p-1')}>
                                                            {item.pricePerHour.toLocaleString('it-It')}
                                                        </span>
                                                        VNĐ
                                                    </td>
                                                    <td>
                                                        <span className={cx('p-1')}>
                                                            {item.pricePerDay.toLocaleString('it-It')}
                                                        </span>{' '}
                                                        VNĐ
                                                    </td>
                                                    <td>
                                                        <span className={cx('p-1')}>
                                                            {item.pricePerWeek.toLocaleString('it-It')}
                                                        </span>{' '}
                                                        VNĐ
                                                    </td>

                                                    <td>
                                                        {/* <Button
                                                            style={{ with: '100%', textTransform: 'uppercase' }}
                                                            className={cx('btn', 'btn-success', 'edit-btn')}
                                                            leftIcon={<FontAwesomeIcon icon={faEdit} />}
                                                            type="submit"
                                                        >
                                                            edit
                                                        </Button> */}

                                                        <Button
                                                            style={{ width: '45%', textTransform: 'uppercase' }}
                                                            className={cx('btn', 'btn-success', 'save-btn')}
                                                            leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                                            type="submit"
                                                        >
                                                            save
                                                        </Button>
                                                        <Button
                                                            style={{ width: '45%', textTransform: 'uppercase' }}
                                                            className={cx('btn', 'btn-danger', 'cancel-btn')}
                                                            leftIcon={<FontAwesomeIcon icon={faX} />}
                                                            type="submit"
                                                        >
                                                            cancel
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Check out table */}
                <div className={cx('row', 'mt-4', 'mb-4')}>
                    <div className={cx('col-lg-12')}>
                        <div className={cx('card')}>
                            <div className={cx('card-body')}>
                                <div className={cx('mb-4', 'h4', 'card-title')}>Latest Checked Out</div>
                                <div className={cx('table-responsive')}>
                                    <table className={cx('table', 'align-middle', 'table-nowrap', 'mb-0')}>
                                        <thead className={cx('table-light')}>
                                            <tr>
                                                <th className={cx('align-middle')}>Order ID</th>
                                                <th className={cx('align-middle')}>User Name</th>
                                                <th className={cx('align-middle')}>Vehicle Id</th>
                                                <th className={cx('align-middle')}>Slot</th>
                                                <th className={cx('align-middle')}>Checked In</th>
                                                <th className={cx('align-middle')}>Checked Out</th>
                                                <th className={cx('align-middle')}>Total</th>
                                                <th className={cx('align-middle')}>View Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className={cx('text-body', 'fw-bold')}>#1</span>
                                                </td>
                                                <td>Hoang Tran</td>
                                                <td>43A-111111</td>
                                                <td>A1</td>
                                                <td>12:43:00</td>
                                                <td>15:45:23</td>
                                                <td>450000 VNĐ</td>
                                                <td>
                                                    <Button
                                                        primary
                                                        // className={cx(
                                                        //     'btn',
                                                        //     'btn-sm',
                                                        //     'btn-rounded',
                                                        //     'waves-effect',
                                                        //     'waves-light',
                                                        // )}
                                                    >
                                                        View Details
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
