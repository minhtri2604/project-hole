
import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';

function Data() {
  const [projectDate, setProjectDate] = useState("");
  const [pileNo, setPileNo] = useState("");
  const [boringStartDate, setBoringStartDate] = useState("");
  const [boringStartTime, setBoringStartTime] = useState("");
  const [boringEndDate, setBoringEndDate] = useState("");
  const [boringEndTime, setBoringEndTime] = useState("");
  const [groutingStartDate, setGroutingStartDate] = useState("");
  const [groutingStartTime, setGroutingStartTime] = useState("");
  const [groutingEndDate, setGroutingEndDate] = useState("");
  const [groutingEndTime, setGroutingEndTime] = useState("");
  const [platformLevel, setPlatformLevel] = useState("");
  const [topOfCasing, setTopOfCasing] = useState("");
  const [cutOffLevel, setCutOffLevel] = useState("");
  const [toc, setTOC] = useState("");
  const [toe, setTOE] = useState("");
  const [ogl, setOGL] = useState("");
  const [pileLength, setPileLength] = useState("");
  const [soilDrilling, setSoilDrilling] = useState("");
  const [totalWeathered, setTotalWeathered] = useState("");
  const [rockSocket, setRockSocket] = useState("");
  const [groutLength, setGroutLength] = useState("");
  const [ofBag, setOfBag] = useState("");
  const [api, setAPI] = useState("");
  const [permanent, setPermanent] = useState("");
  const [data, setData] = useState({
    projectDate: '',
    pileNo: '',
    boringStartDate: '',
    boringStartTime: '',
    boringEndDate: '',
    boringEndTime: '',
    groutingStartDate: '',
    groutingStartTime: '',
    groutingEndDate: '',
    groutingEndTime: '',
    platformLevel: '',
    topOfCasing: '',
    cutOffLevel: '',
    toc: '',
    toe: '',
    ogl: '',
    pileLength: '',
    soilDrilling: '',
    totalWeathered: '',
    rockSocket: '',
    groutLength: '',
    ofBag: '',
    api: '',
    permanent: ''
  });
  
  const handleClick = (e) => {
    e.preventDefault();
    setData({
      ...data,
      projectDate,
      pileNo,
      boringStartDate,
      boringStartTime,
      boringEndDate,
      boringEndTime,
      groutingStartDate,
      groutingStartTime,
      groutingEndDate,
      groutingEndTime,
      platformLevel,
      topOfCasing,
      cutOffLevel,
      toc,
      toe,
      ogl,
      pileLength,
      soilDrilling,
      totalWeathered,
      rockSocket,
      groutLength,
      ofBag,
      api,
      permanent
    });
    console.log(data);
  };
  

  

  return (
    <div className="container">
      <form className="row m-[20px]" onSubmit={handleClick} >
        <div className="col-6 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Project Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            value={projectDate}
            onChange={(e) => setProjectDate(e.target.value)}
          />
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Pile No.
          </label>
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={pileNo}
            onChange={(e) => setPileNo(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Boring Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            value={boringStartDate}
            onChange={(e) => setBoringStartDate(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Boring Start Time
          </label>
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            type="time"
            value={boringStartTime}
            onChange={(e) => setBoringStartTime(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Boring End Date
          </label>
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            type="date"
            value={boringEndDate}
            onChange={(e) => setBoringEndDate(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Boring End Time
          </label>
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            type="time"
            value={boringEndTime}
            onChange={(e) => setBoringEndTime(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Grouting Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            value={groutingStartDate}
            onChange={(e) => setGroutingStartDate(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Grouting Start Time
          </label>
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            type="time"
            value={groutingStartTime}
            onChange={(e) => setGroutingStartTime(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Grouting End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            value={groutingEndDate}
            onChange={(e) => setGroutingEndDate(e.target.value)}
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Grouting End Time
          </label>
          <input
            type="time"
            className="form-control"
            id="exampleFormControlInput1"
            value={groutingEndTime}
            onChange={(e) => setGroutingEndTime(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Platform Level (RL)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={platformLevel}
            onChange={(e) => setPlatformLevel(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Top Of Casing (RL)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={topOfCasing}
            onChange={(e) => setTopOfCasing(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Cut-off Level (RL)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={cutOffLevel}
            onChange={(e) => setCutOffLevel(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Bored Depth (m) fr. TOC
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={toc}
            onChange={(e) => setTOC(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            TOE Level (RL)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={toe}
            onChange={(e) => setTOE(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Bored Depth (m) fr. OGL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={ogl}
            onChange={(e) => setOGL(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Pile Length (m)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={pileLength}
            onChange={(e) => setPileLength(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Soil Drilling (m)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={soilDrilling}
            onChange={(e) => setSoilDrilling(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Total weathered Rock
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={totalWeathered}
            onChange={(e) => setTotalWeathered(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Rock Socket Length (m)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={rockSocket}
            onChange={(e) => setRockSocket(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Grout Length (m)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={groutLength}
            onChange={(e) => setGroutLength(e.target.value)}
          />
        </div>
        <div className="col-2 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nos. of bag
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={ofBag}
            onChange={(e) => setOfBag(e.target.value)}
          />
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            API Pipe Length (m)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={api}
            onChange={(e) => setAPI(e.target.value)}
          />
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Permanent Casing (m)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={permanent}
            onChange={(e) => setPermanent(e.target.value)}
          />
        </div>

        <button type="submit"  className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Data;
