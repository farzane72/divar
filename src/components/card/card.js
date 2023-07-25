import El from "../../utils/El";


export default function Card({title,situation,price,address,src}){
    return(
        El({
            element:'div',
            className:'flex border rounded-md p-2 gap-4 h-[180px]',
            child:[
                El({
                    element:'div',
                    className:'flex flex-col gap-2 ',
                    child:[
                        El({
                            element:'p',
                            className:'font-bold mb-4',
                            child:title
                        }),
                        El({
                            element:'span',
                            className:'text-slate-400 text-sm',
                            child:situation
                        }),
                        El({
                            element:'div',
                            className:'flex',
                            child:[
                                El({
                                    element:'span',
                                    className:'text-slate-400 text-sm',
                                    child:price
                                }),
                                El({
                                    element:'span',
                                    className:'text-slate-400 text-sm',
                                    child:'تومان'
                                }),
                            ]
                        }),
                       
                        El({
                            element:'p',
                            className:'text-slate-400 text-sm',
                            child:address
                        })
                        
                    ]
        
                }),
                El({
                    element:'div',
                    className:'w-[150px]',
                    child:[

                        El({
                            element:'img',
                            className:'w-full rounded',
                            src:src
                        })
                        
                    ]
        
                })

            ]

        })
    )
}