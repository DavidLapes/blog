import React, {Component} from "react";

class About extends Component {
    render() {
        return (
            <div className="page-content-container">
                <div className="about-me-container">
                    <div className="about-me-picture-container">
                        <img className="about-me-picture" src={process.env.PUBLIC_URL + "/img/profile_picture.jpg"} alt="PROFILE_PICTURE"/>
                    </div>
                    <div className="about-me-section">
                        <h3>About me</h3>
                        <div className="about-me-section-item">
                            <text>
                                I am a freelance software engineer. I specialize in JVM languages, especially Clojure and Java.
                                My home is currently in Brno, Czech Republic and I live here with my amazing girlfriend.
                                I have my small office here which I use to do my home office work. Right now I only accept remote co-operations.
                                And because I am currently busy working for Cognitect, I can only offer maximum of 16 hours a week, in case you are interested.
                                <br/> <br/>
                                In my free time I really love cooking, playing piano, having board game nights with our friends,
                                sometimes even playing some video games, right now it is a deck-building rogue-like Slay the Spire.
                                I regularly attend cooking and baking courses. It is my passion. Why? Because I admire simplicity.
                                I believe getting away from all the stress everyone is having nowadays is only a good thing.
                                And for me, that's accomplished by cooking really complicated meals that take long time.
                            </text>
                        </div>
                    </div>
                    <div className="about-me-section">
                        <h3>Work history</h3>
                        <div className="about-me-section-item">
                            <h4>Flexiana - Cognitect</h4>
                            <h5>Senior Software engineer (01/02/2020 - now)</h5>
                            <ul>
                                <li>Member of Cognitect development team</li>
                                <li>Responsible for UX/UI makeover with highly tight co-operation with UX/UI designer</li>
                                <li>Finite State Machine</li>
                                <li>State Chart</li>
                                <li>Project of Danish Government - Ministry of Taxation</li>
                                <li>Huge enterprise project</li>
                            </ul>
                            <div className="about-me-section-tech-stack-container">
                                <div className="about-me-section-tech-stack-item">
                                    <span>Clojure</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Java</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>ClojureScript</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Reagent</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Re-Frame</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>JavaScript</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Compojure</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Integrant</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Datadog</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>GitHub</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>AWS Lambda</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>AWS CloudWatch</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>AWS ECS</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>AWS RDS</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>AWS Batch</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Leiningen</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>KMD WorkZone</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Jenkins</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-me-section-item">
                            <h4>Temify Consulting</h4>
                            <h5>Senior Team Leader (01/11/2018 - 01/04/2020)</h5>
                            <ul>
                                <li>Lead development team of 5 developers</li>
                                <li>Responsible for pushing CRM producer forward</li>
                                <li>Attended business meetings</li>
                                <li>Created multiple business opportunities that were accepted</li>
                                <li>Moved yearly sales from red numbers to black numbers</li>
                                <li>Saved the company many customers that were about to leave before I was hired</li>
                                <li>Successful turnaround of whole product using my strategies</li>
                                <li>Created highly competitive development team by hiring new members</li>
                            </ul>
                            <div className="about-me-section-tech-stack-container">
                                <div className="about-me-section-tech-stack-item">
                                    <span>Clojure</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Java</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>PolymerJS</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>ReactJS</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>JavaScript</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Integrant</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Compojure</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>AWS</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>PostgreSQL</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>GitHub</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Leiningen</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Google API</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>MS Exchange</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>API integration</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Buddy-Auth</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Tomcat</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>CircleCI</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-me-section-item">
                            <h4>Home Credit</h4>
                            <h5>Software Engineer (01/09/2018 - 30/11/2018)</h5>
                            <ul>
                                <li>J</li>
                                <li>Responsible for creating and grading assignments</li>
                                <li>Helped with preparation of final exams of this class</li>
                            </ul>
                            <div className="about-me-section-tech-stack-container">
                                <div className="about-me-section-tech-stack-item">
                                    <span>Java</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring Boot</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring Cloud</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring JPA</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring JDBC</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring Security</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring Test</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Tomcat</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Oracle</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>SOAP API</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>MapStruct</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Lombok</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Microservices</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>JavaScript</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Enterprise Architect</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-me-section-item">
                            <h4>VIP Trust</h4>
                            <h5>Software Engineer (01/02/2018 - 08/31/2018)</h5>
                            <ul>
                                <li>Designed, developed and released whole IoT solution for Raspberry Pi 3B</li>
                            </ul>
                            <div className="about-me-section-tech-stack-container">
                                <div className="about-me-section-tech-stack-item">
                                    <span>Python</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Java</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>MySQL</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>JavaScript</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Raspberry Pi</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-me-section-item">
                            <h4>Teaching Assistant in Advanced Java classes</h4>
                            <h5>Junior Java Developer (01/08/2017 - 01/02/2018)</h5>
                            <ul>
                                <li>Lead seminar classes with 20 students present</li>
                                <li>Responsible for creating and grading assignments</li>
                                <li>Helped with preparation of final exams of this class</li>
                            </ul>
                        </div>
                        <div className="about-me-section-item">
                            <h4>Sýkora Data Center</h4>
                            <h5>Software engineer (01/08/2017 - 01/02/2018)</h5>
                            <ul>
                                <li>Learned details of Spring Boot</li>
                                <li>Learned how to use Selenium and WebDriver</li>
                                <li>Experienced agile for the first time in real job</li>
                            </ul>
                            <div className="about-me-section-tech-stack-container">
                                <div className="about-me-section-tech-stack-item">
                                    <span>Java</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Spring Boot</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Tomcat</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>Selenium</span>
                                </div>
                                <div className="about-me-section-tech-stack-item">
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-me-section">
                        <h3>Education</h3>
                        <div className="about-me-section-item">
                            <h4>University of Ostrava</h4>
                            <h5>Bachelor's degree (01/09/2016 - now)</h5>
                            <ul>
                                <li>Overall GPA higher than 3.5</li>
                                <li>Best scholarship received every semester</li>
                                <li>IoT semester project in co-operation with real architect</li>
                                <li>Best results in Math Analysis</li>
                                <li>Even though I didn't want to go back to school, I applied,
                                    because I heard only good things about OSU and really wanted to get IT degree,
                                    because by this time I was already self-teaching myself advanced Java concepts</li>
                            </ul>
                        </div>
                        <div className="about-me-section-item">
                            <h4>Czech Technical University in Prague</h4>
                            <h5>Bachelor's degree (01/09/2014 - 01/03/2016)</h5>
                            <ul>
                                <li>Studied on CTU just to find out what I want to do in my life</li>
                                <li>Learned a lot about laws in IT</li>
                                <li>Even though I did really great in all classes, I had to end the studies because of health issues</li>
                            </ul>
                        </div>
                        <div className="about-me-section-item">
                            <h4>Grammar School</h4>
                            <h5>High School diploma (01/09/2008 - 31/08/2014)</h5>
                            <ul>
                                <li>Participated in science competition every year</li>
                                <li>Took part in development courses last 3 years before I graduated</li>
                                <li>Used Visual Basic, Java and JavaScript for programming</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-me-section">
                        <h3>Events</h3>
                        <div className="about-me-section-item">
                            <h5>tietoEVRY (in progress)</h5>
                            <span>Project about smart parking lots to resolve issues with finding a parking spot
                            in cities. This event is about bringing innovative idea to help public sector
                            and non-profit organizations.</span>
                        </div>
                        <div className="about-me-section-item">
                            <h5>Senior Java Global Summit - 25 years</h5>
                            <span>This was a big event with huge amount of attendees. More than 30 speakers attended the event.
                            One of the most important things was talk about Garbage Collector and customizing it for developer's purpose.
                            Other one I also really enjoyed was metrics collection library for on-green-field projects.</span>
                        </div>
                        <div className="about-me-section-item">
                            <h5>Hackathon - Government Vignettes E-Shop</h5>
                            <span>This Hackathon was a very huge event. Prime Minister of Czech Republic came on the release day.
                            Even Minister of Transport was present. The atmosphere was really unique, because they pushed developers
                            to do more and more work. After 45 hours of development and almost no sleep of 60 developers divided in sub-teams
                            everyone is really tired, but because of media (even from other countries, for example Germany) being there
                            in the office it created highly productive environment. I, myself, developed whole solution for GP WebPay which was
                            used by multiple components. I was also responsible for MS Azure environment and security flow of backend.
                            I was introduced to Kibana, RabbitMQ, MS Azure, ElasticSearch, Docker and Kubernetes.</span>
                        </div>
                    </div>
                    <div className="about-me-section">
                        <h3>Certifications</h3>
                        <div className="about-me-section-item">
                            <h5>Stanford University - Machine Learning (in progress)</h5>
                            <span>This certification is being held by Stanford University on Coursera. By the end of the course
                            I will receive certificate which will serve as a proof I know math behind Machine Learning algorithms,
                            Neural Networks (perceptron and backpropagation) and know how to properly adjust algorithms for real life problems.</span>
                        </div>
                        <div className="about-me-section-item">
                            <h5>MatLab Intermediate Course</h5>
                            <span>This certification took place on university OSU and it was lead by a guy working in HumuSoft.
                            We learned both basics and advanced concepts in MatLab. I also used this language multiple
                            times during creating neural networks during my AI classes on university and other courses.</span>
                        </div>
                    </div>
                    <div className="about-me-section">
                        <h3>Tech stack</h3>
                        <div className="about-me-section-tech-stack-container">
                            <div className="about-me-section-tech-stack-item">
                                <span>Clojure</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Java</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Spring Boot</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Spring Security</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Spring JPA</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Spring JDBC</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Spring MVC</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Maven</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Leiningen</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Lombok</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>MapStruct</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>jUnit 4</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Java Assertions</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Elastic Beanstalk</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>AWS EC2</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>AWS CloudWatch</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>AWS RDS</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>AWS API Gateway</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>AWS LoadBalancer</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>MS Azure</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Datadog</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>KMD WorkZone</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Buddy-Auth</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Compojure</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Integrant</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Jetty</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Tomcat</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>MySQL</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>PostgreSQL</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Oracle</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>PostgreSQL</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>GitHub</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>GitHub Buddy</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Jenkins</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>CircleCI</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>C#</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Unity3D</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Machine Learning</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Neural Networks</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Raspberry Pi</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Arduino</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>Python</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>C++</span>
                            </div>

                            <div className="about-me-section-tech-stack-item">
                                <span>ClojureScript</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Reagent</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Re-Frame</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>JavaScript</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>ReactJS</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>HTML5</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>CSS3</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-me-section">
                        <h3>Skills</h3>
                        <div className="about-me-section-tech-stack-container">
                            <div className="about-me-section-tech-stack-item">
                                <span>Cooking</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Baking</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Boxing</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Programming</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Board games</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Hiking</span>
                            </div>
                            <div className="about-me-section-tech-stack-item">
                                <span>Mountaineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
