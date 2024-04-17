import PureComponent from '../../components/chart.jsx'
import Example2 from '../../components/areachart.jsx'
import wallet from '../../assets/icons/wallet.svg'
import stats from '../../assets/icons/stats.svg'
import expenses from '../../assets/icons/expenses.svg'
import Exampleneg from '../../components/negativechart.jsx'
import Table from '../../components/orgtable.jsx'
import add from '../../assets/icons/add.svg'


export const OrgDashboard = () => {
    return (
        <div className="w-full p-4 bg-white-400">
            <div className='h-full w-full flex flex-col gap-y-2 bg-slate-50 rounded-xl py-4 px-6'>
                <div className='flex flex-col'>
                    <p className='font-body text-[20px] font-semibold'>Dashboard</p>
                    <p className='font-body text-[12px] opacity-50'>Monitor your sales revenue</p>
                </div>
                <div className='w-full h-1/6 flex gap-x-4'>
                    <div className='w-1/3 p-4 flex border-2 gap-x-2 items-center border-white-500 rounded-lg'>
                        <img src={wallet} className="w-[24px]" ></img>
                        <div className='w-2/4 flex flex-col'>
                            <p className="font-body text-[12px] opacity-50 m-0" >Total Income</p>
                            <p className='font-body text-[24px] font-semibold m-0'>$3,000,650</p>
                        </div>
                        <div className="w-2/4 h-full" >
                            <Example2/>
                        </div>
                    </div>
                    <div className='w-1/3 p-4 flex border-2 gap-x-2 items-center border-white-500 rounded-lg'>
                        <img src={stats} className="w-[24px]"></img>
                        <div className='w-2/4 flex flex-col'>
                            <p className="font-body text-[12px] opacity-50 m-0" >Total Sales</p>
                            <p className='font-body text-[24px] font-semibold m-0'>$800,250</p>
                        </div>
                        <div className="w-2/4 h-full">
                            <Example2/>
                        </div>
                    </div>
                    <div className='w-1/3 p-4 flex border-2 gap-x-2 items-center border-white-500 rounded-lg'>
                    <img src={expenses} className="w-[24px]" ></img>
                        <div className='w-2/4 flex flex-col'>
                            <p className="font-body text-[12px] opacity-50 m-0" >Total Expenses</p>
                            <p className='font-body text-[24px] font-semibold m-0'>$700,067</p>
                        </div>
                        <div className="w-2/4 h-full">
                            <Exampleneg/>
                        </div>
                    </div>
                </div>
                <div className='h-3/6 flex gap-x-4'>
                    <div className='w-1/2 h-[400px] bg-white-400'>
                        <PureComponent/> 
                    </div>
                    <div className='w-1/2 flex flex-col p-8 gap-y-4'>
                        <div className='p-4 h-1/2 border-2 border-white-500 rounded-lg flex gap-2'>
                            <div className='w-3/4 h-full '>
                                <p className='text-2xl font-semibold mb-3 text-center font-display'>Employee Statistics</p>
                                <div><span className='text-xl font-semibold font-display'>5 </span><span className='font-body'>new employees recruited this quarter 🎉🎉🙌</span></div>
                                <div><span className='text-xl font-semibold font-display'>2 </span><span className='font-body'>employees lost this quarter 😢😢</span></div>
                            </div>
                            <div className='w-1/4 '>
                                <Example2/>
                            </div>
                        </div>
                        <div className='p-4 h-1/2 border-2 border-white-500 rounded-lg '>
                            <p className='text-2xl font-semibold mb-3 text-center font-display'>Upcoming Announcements!!! 🎊</p>
                            <div className=''>
                                <p className='font-body'>FC Trade is 20 tomorrow!!!!!!</p>
                                <p className='font-body'>Important investment meeting happening on Monday</p>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className='h-2/6'>
                        <div className='flex justify-between items-center'>
                            <p className="text-2xl font-body font-bold">Employee Table</p>
                            <div className="flex gap-2 mb-2">
                                <div className='px-8 py-2  bg-green-300 align-middle rounded-xl'>
                                    <p className='text-green-400 font-body font-semibold'> Pay all</p>
                                </div>
                                <div className='flex gap-1 border-2 border-white-500 rounded-lg p-2'>
                                    <img src={add}/>
                                    <p className='font-body'>Add employee</p>
                                </div>
                            </div>
                            
                        </div>
                    <Table className= "w-1/2 h-full"/>
                </div>

            </div>
        </div>
    )
}