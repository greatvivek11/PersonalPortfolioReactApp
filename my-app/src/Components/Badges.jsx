import React from 'react';
import { Container } from 'react-bootstrap';
import { BadgeComponent } from './BadgeComponent';
import azDataLg from '/Assets/large/azure-data-engineer-associate-600x600.png';
import azDataFunLg from '/Assets/large/azure-data-fundamentals-240x240.png';
import azDevLg from '/Assets/large/azure-developer-associate-240x240.png';
import azDevOps from '/Assets/large/azure-devops.png';
import azFunLg from '/Assets/large/azure-fundamentals-240x240.png';
import azIotLg from '/Assets/large/azure-iot-speciality-240x240.png';

function Badges() {
    return (
        <div style={{backgroundImage:"url(/Assets/resources/pattern16.jpg)"}} className='my-4 px-10 '>
            <BadgeComponent link="https://www.credly.com/badges/de8886bc-a290-4144-b3c4-148bd4c61373/public_url" img={azDevOps} tag="AZ 400 badge" />
            <BadgeComponent link="https://www.credly.com/badges/287ccc6b-a5fa-4253-a970-14ed19efb012/public_url" img={azDevLg} tag="AZ 204 badge" />
            <BadgeComponent link="https://www.credly.com/badges/31df1f7c-f199-47db-9a50-a0f697686c77/public_url" img={azDataLg} tag="DP 203 badge" />
            <BadgeComponent link="https://www.credly.com/badges/6b136cb8-d3f4-4142-b6bc-d9846a5bf69d/public_url" img={azIotLg} tag="AZ 220 badge" />
            <BadgeComponent link="https://www.credly.com/badges/11fa2238-d5a2-4a6a-bffd-1d428803db9b/public_url" img={azFunLg} tag="AZ 900 badge" />
            <BadgeComponent link="https://www.credly.com/badges/b7a8b9a5-20ca-4f6e-86a6-13450e22af1a/public_url" img={azDataFunLg} tag="DP 900 badge" />
        </div>
    )
}

export default Badges