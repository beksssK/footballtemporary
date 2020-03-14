import React from 'react';
import './HomeMiddle.css';
import MyCarousel from "../UI/MyCarousel/MyCarousel";

const HomeMiddle = () => {

    let windowWidth = window.matchMedia("(max-width: 600px)");
    if(windowWidth.matches){
        return (
            <div className='HomeMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>HNBM SPORTS AGENCY AND COMPANY LTD</h2>
                </section>
                <section className='info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Who are we</h2>
                        <p className='info__text info__text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur cumque dolorem, doloremque esse eum facere incidunt quibusdam tempora! Alias animi culpa delectus error exercitationem iure maxime nihil non perferendis praesentium, provident quibusdam quisquam ratione reprehenderit sed sint tempore temporibus!
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic who__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__what container'>
                    <div className='info__item'>
                        <h2 className='info__title'>What do we do</h2>
                        <p className='info__text info__text-right'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci est impedit iste tempora tenetur voluptate. Cupiditate eligendi numquam repellat unde vitae? Nam nobis non recusandae rem repudiandae suscipit ullam!
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic what__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Why they choose us?</h2>
                        <p className='info__text info__text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda debitis quam quisquam tenetur. Assumenda commodi doloribus eos est fugiat hic pariatur provident quae qui sed! Alias aut distinctio dolores harum iusto modi nostrum odio perspiciatis, quaerat voluptate?</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic why__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Our staff</h2>
                        <p className='info__text info__text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, cumque debitis doloribus eaque eius enim eos in ipsam itaque labore laborum magni neque nihil nulla odit officia perspiciatis provident quasi quidem quisquam, tempora temporibus tenetur ut veritatis! Ab culpa ea, iste magni necessitatibus sequi?</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic staff__pic'>
                            <MyCarousel/>
                        </div>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div className='HomeMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>HNBM SPORTS AGENCY AND COMPANY LTD</h2>
                </section>
                <section className='info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Who are we</h2>
                        <p className='info__text info__text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur cumque dolorem, doloremque esse eum facere incidunt quibusdam tempora! Alias animi culpa delectus error exercitationem iure maxime nihil non perferendis praesentium, provident quibusdam quisquam ratione reprehenderit sed sint tempore temporibus!
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic who__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__what container'>
                    <div className='info__item'>
                        <div className='info__pic what__pic'>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>What do we do</h2>
                        <p className='info__text info__text-right'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci est impedit iste tempora tenetur voluptate. Cupiditate eligendi numquam repellat unde vitae? Nam nobis non recusandae rem repudiandae suscipit ullam!
                        </p>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Why do they choose us?</h2>
                        <p className='info__text info__text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda debitis quam quisquam tenetur. Assumenda commodi doloribus eos est fugiat hic pariatur provident quae qui sed! Alias aut distinctio dolores harum iusto modi nostrum odio perspiciatis, quaerat voluptate?</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic why__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic staff__pic'>
                            <MyCarousel/>
                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>Our staff</h2>
                        <p className='info__text info__text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, cumque debitis doloribus eaque eius enim eos in ipsam itaque labore laborum magni neque nihil nulla odit officia perspiciatis provident quasi quidem quisquam, tempora temporibus tenetur ut veritatis! Ab culpa ea, iste magni necessitatibus sequi?</p>
                    </div>
                </section>
            </div>
        );
    }

};

export default HomeMiddle;
