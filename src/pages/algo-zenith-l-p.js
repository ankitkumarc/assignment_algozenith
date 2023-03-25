import { useEffect } from "react";
import styles from "./algo-zenith-l-p.module.css";

const AlgoZenithLP = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <article className={styles.algozenithLp} data-animate-on-scroll>
      <footer className={styles.hero}>
        <img className={styles.laptopBg} alt="" src="/laptop--bg@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet
            </div>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet
            </div>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div className={styles.aboveLaptop}>
          <div className={styles.beBetterAt}>{`Be better at DSA & CP`}</div>
          <div className={styles.loremIpsumDolor4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.joinNowWrapper}>
                <div className={styles.joinNowContainer}>
                  <b>{`Join now `}</b>
                  <b className={styles.b}>{`->`}</b>
                </div>
              </div>
            </div>
            <div className={styles.viewCurriculumWrapper}>
              <b className={styles.joinNowContainer}>View curriculum</b>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.maskGroupParent}>
            <div className={styles.maskGroup}>
              <img
                className={styles.m10i307n008fc052Icon}
                alt=""
                src="/1601m10i307n008fc05-2@2x.png"
              />
              <img
                className={styles.m10i307n008fc051Icon}
                alt=""
                src="/1601m10i307n008fc05-1@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-218.svg"
                  />
                  <b className={styles.trees}>Trees</b>
                </div>
                <div className={styles.frameParent2}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-221.svg"
                  />
                  <b className={styles.trees}>Graphs</b>
                </div>
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-222.svg"
                  />
                  <b className={styles.trees}>Time Comlexity</b>
                </div>
                <div className={styles.frameParent3}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-220.svg"
                  />
                  <b className={styles.trees}>Dynamic Programming</b>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-217.svg"
                  />
                  <b className={styles.trees}>Backtracking</b>
                </div>
                <div className={styles.frameParent4}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-215.svg"
                  />
                  <b className={styles.trees}>Binary Search</b>
                </div>
                <div className={styles.frameParent5}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-216.svg"
                  />
                  <b className={styles.trees}>{`Branch & Bound`}</b>
                </div>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-224.svg"
                  />
                  <b className={styles.trees}>{`Branch & Bound`}</b>
                </div>
                <div className={styles.frameParent7}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-219.svg"
                  />
                  <b className={styles.trees}>Two pointers</b>
                </div>
              </div>
            </div>
            <img className={styles.frameChild8} alt="" src="/group-319.svg" />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-5.svg" />
            <img
              className={styles.frameChild9}
              alt=""
              src="/group-270@2x.png"
            />
          </div>
          <img className={styles.frameChild10} alt="" src="/ellipse-51.svg" />
        </div>
      </footer>
      <a className={styles.pricing}>
        <div className={styles.graphParent}>
          <img className={styles.graphIcon} alt="" src="/graph.svg" />
          <div className={styles.investInSkillsEarn10xOfParent}>
            <div className={styles.investInSkillsContainer}>
              <p className={styles.investInSkills}>Invest in skills,</p>
              <p className={styles.investInSkills}>
                <span className={styles.earn}>earn</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.earn}>10X</span>
                <span> of what you paid.</span>
              </p>
            </div>
            <div className={styles.loremIpsumDolor5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild11} />
                <div className={styles.cryearHighestFresherContainer}>
                  <p className={styles.investInSkills}>
                    <b>1.2 Cr/Year</b>
                  </p>
                  <p className={styles.highestFresherPackage}>
                    highest fresher package
                  </p>
                </div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild11} />
                <div className={styles.cryearHighestFresherContainer}>
                  <p className={styles.investInSkills}>
                    <b>{`Multiple <100 Ranks`}</b>
                  </p>
                  <p className={styles.highestFresherPackage}>
                    in kickstart last year
                  </p>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild11} />
                <div className={styles.cryearHighestFresherContainer}>
                  <p className={styles.investInSkills}>
                    <b>1000+ Offers</b>
                  </p>
                  <p className={styles.highestFresherPackage}>
                    from top companies
                  </p>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild11} />
                <div className={styles.cryearHighestFresherContainer}>
                  <p className={styles.investInSkills}>
                    <b>Trusted by IITians</b>
                  </p>
                  <p className={styles.highestFresherPackage}>
                    for their career prep
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.maskGroupGroup}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group@2x.png"
            />
            <div className={styles.frameParent9}>
              <div className={styles.parent}>
                <div className={styles.div}>₹13,999</div>
                <b className={styles.b1}>₹19,999</b>
                <div className={styles.premiumVictoryBatch}>
                  Premium Victory Batch
                </div>
              </div>
              <img
                className={styles.frameChild15}
                alt=""
                src="/frame-2151.svg"
              />
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.frameParent11}>
                <div className={styles.rectangleParent4}>
                  <a className={styles.rectangleA} />
                  <div className={styles.hrsLiveContent}>
                    100+ Hrs Live Content
                  </div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild16} />
                  <div className={styles.hrsLiveContent}>50+ Hrs Contest</div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild16} />
                  <div className={styles.hrsLiveContent}>500+ Problems</div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild16} />
                  <div className={styles.hrsLiveContent}>
                    Includes an interview bootcamp and access to a mentor
                    network
                  </div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild16} />
                  <div className={styles.hrsLiveContent}>
                    Enjoy access to our content for one year (paid extensions
                    available)
                  </div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild16} />
                  <div className={styles.hrsLiveContent}>
                    Flexible payment options, including no-cost EMI, are
                    available.
                  </div>
                </div>
              </div>
              <div className={styles.ctas}>
                <div className={styles.joinNowFrame}>
                  <div className={styles.joinNowContainer}>
                    <b>{`Join Now `}</b>
                    <b className={styles.b}>{`->`}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className={styles.algozenithLpChild} />
    </article>
  );
};

export default AlgoZenithLP;
