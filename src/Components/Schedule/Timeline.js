import React, { Component } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
// Timeline vertical
class Timeline extends Component {
  render() {
    return (
      <div className="row banner" id="schedule" style={{ paddingTop: '80px' }}>
        <div className="banner-text">
          <h1
            className="responsive-headline"
            style={{ textAlignVertical: 'center', textAlign: 'center' }}
          >
            SCHEDULE
          </h1>
        </div>

        <br></br>

        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>REGISTRATION</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  10th - 16th Nov
                </span>
              </div>
              <h5 style={{ color: '#fff' }}>Registration period begins</h5>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>PROJECTS ANNOUNCEMENT</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  16th - 18th Nov
                </span>
              </div>
              <h5 style={{ color: '#fff' }}>
                Projects announcement and mentor allotment
              </h5>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>ACCEPTANCE MAIL</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  18th - 20th Nov
                </span>
              </div>
              <h5 style={{ color: '#fff' }}>Sending Accepting mails</h5>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>COMMUNITY BONDING</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  20th - 25th Nov
                </span>
              </div>
              <h5 style={{ color: '#fff' }}>Community bonding period</h5>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>CODING PERIOD</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  25th Nov-20th Dec
                </span>
              </div>
              <h5 style={{ color: '#fff' }}>Code Code Code...</h5>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>

            <div className="cd-timeline-content">
              <h3 style={{ color: 'white' }}>RESULTS</h3>
              <div className="timeline-content-info">
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  30th Dec
                </span>
              </div>
              <h5 style={{ color: '#fff' }}>Final Results</h5>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Timeline;
