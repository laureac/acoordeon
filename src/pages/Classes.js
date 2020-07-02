import React from 'react';
import Accordeon from '../components/Accordeon';

function Classes(props) {
    return (
        <div className='main'>
            <div className='main-header'>
                <h2>Welcome, it’s so lovely to meet you.</h2>
                <p>Nulla ad tempor cupidatat culpa exercitation. Voluptate mollit aliquip elit ex incididunt labore minim reprehenderit eu sunt magna ex.</p>
            </div>
            <div className='content-section'>
                <Accordeon 
                title='Nulla culpa ad sit occaecat esse.'
                content='
                <p>Pariatur reprehenderit enim Lorem fugiat culpa. Commodo velit quis officia elit. Esse amet deserunt excepteur reprehenderit deserunt occaecat occaecat. Id proident non reprehenderit nisi nostrud irure laboris minim eu.</p>
                </br>
                <p>Laboris sit nisi proident consequat laboris aliqua.</p>'/>
                <Accordeon 
                title='Id mollit consectetur sit.'
                content='
                <p>Do consequat anim cillum aute aliqua. Magna minim aliquip duis nisi consequat esse. Ea consectetur irure magna consectetur ea non laboris qui elit eiusmod sit exercitation aliquip laborum. Culpa excepteur cupidatat culpa nisi minim elit tempor minim reprehenderit enim sit exercitation in.</p>
                </br>
                <p>Officia elit exercitation sit laborum incididunt proident aliqua consectetur ea nulla duis est.</p>'/>
                <Accordeon 
                title='Magna irure velit.'
                content='
                <p>Laborum ut elit occaecat proident minim occaecat cillum minim ea tempor incididunt. Incididunt aliquip non commodo eiusmod nostrud nostrud commodo commodo. Sint elit id esse amet consectetur reprehenderit officia adipisicing magna et ea. In sit cillum sit tempor aliquip qui nostrud ea non fugiat consectetur elit mollit incididunt. Fugiat exercitation deserunt aute cupidatat reprehenderit dolore in consequat sit amet. Laborum nostrud cillum cupidatat irure ex eiusmod sit consectetur do dolor commodo.</p>
                 '/>
                <Accordeon 
                title='Excepteur dolor sit.'
                content='
                <p>Laborum ut elit occaecat proident minim occaecat cillum minim ea tempor incididunt.</p>
                </br>
                <p>Officia elit exercitation sit laborum incididunt proident aliqua consectetur ea nulla duis est.</p>
                 '/>
                <Accordeon 
                title='Proident voluptate amet labore sint.'
                content='
                <p>Laborum ut elit occaecat proident minim occaecat cillum minim ea tempor incididunt.</p>
                </br>
                <p>Officia elit exercitation sit laborum incididunt proident aliqua consectetur ea nulla duis est.</p>
                 '/>
            </div>
        </div>
    );
}

export default Classes;