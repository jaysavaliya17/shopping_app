import React, { useState } from 'react'
import Head from './Head'
import Sidenav from './Sidenav'
import Cardx from './Cardx'

export default function Home() {
    const [search,setSearch] = useState(null)
  return (
    <div>
        <Head searchid={setSearch}/>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidenav/>
                    </div>
                    <div className="col-9 jay">
                        <div className="row">
                            <Cardx search={search}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
