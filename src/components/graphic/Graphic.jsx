import React from 'react';
import { PieChart, Pie } from 'recharts';

const Graphic = () => {

        const data01 = [
            {
              "name": "Group A",
              "value": 63
            },
            {
              "name": "Group B",
              "value": 63
            },
            {
              "name": "Group C",
              "value": 63
            },
            {
              "name": "Group D",
              "value":  63
            },
            {
              "name": "Group E",
              "value": 63
            },

            {
              "name": "Group F",
              "value": 63
            },
            {
              "name": "Group G",
              "value": 63
            },
            {
              "name": "Group H",
              "value": 63
            },
            {
              "name": "Group I",
              "value": 63
            },
            {
              "name": "Group J",
              "value": 63
            },
            {
              "name": "Group K",
              "value": 63
            },
            {
              "name": "Group L",
              "value": 63
            },
            {
              "name": "Group M",
              "value": 63
            },
            {
              "name": "Group N",
              "value": 63
            },
            {
              "name": "Group O",
              "value": 63
            },
            {
              "name": "Group P",
              "value": 63
            },
            {
              "name": "Group Q",
              "value": 63
            },
            {
              "name": "Group R",
              "value": 63
            },
            {
              "name": "Group T",
              "value": 63
            },
            {
              "name": "Group U",
              "value": 63
            },
            


          ];
          const data02 = [
            {
              "name": "Group A",
              "value": 63
            },
            {
              "name": "Group B",
              "value": 63
            },
            {
              "name": "Group C",
              "value": 63
            },
            {
              "name": "Group D",
              "value": 63
            },
            {
              "name": "Group E",
              "value": 63
            },

            {
              "name": "Group F",
              "value": 63
            },
            {
              "name": "Group G",
              "value": 63
            },
            {
              "name": "Group H",
              "value": 63
            },
            {
              "name": "Group I",
              "value": 63
            },
            {
              "name": "Group J",
              "value": 63
            },
            {
              "name": "Group K",
              "value": 63
            },
            {
              "name": "Group L",
              "value": 63
            },
            {
              "name": "Group M",
              "value": 63
            },
            {
              "name": "Group N",
              "value": 63
            },
            {
              "name": "Group O",
              "value": 63
            },
            {
              "name": "Group P",
              "value": 63
            },
            {
              "name": "Group Q",
              "value": 63
            },
            {
              "name": "Group R",
              "value": 63
            },
            {
              "name": "Group T",
              "value": 63
            },
            {
              "name": "Group U",
              "value": 63
            },
          ];
              
          return (
                                      
          <PieChart width={290} height={250}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"  />
            
          </PieChart>

    );
};

export default Graphic;