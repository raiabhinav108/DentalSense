import './transformation.css'

import ReactCompareImage from 'react-compare-image';

const Transformation = () => {
    const before =
    "	https://sculptperio.com/wp-content/uploads/2022/11/gum-recession-case-6-before.jpg";
  const after =
    "https://sculptperio.com/wp-content/uploads/2022/11/gum-recession-case-6-after.jpg";

    const before2 =
    "	https://sculptperio.com/wp-content/uploads/2022/11/gum-recession-case-2-before.jpg";
  const after2 =

    "	https://sculptperio.com/wp-content/uploads/2022/11/gum-recession-case-2-after.jpg";
    const before3 =
    "https://sculptperio.com/wp-content/uploads/2022/11/implants-case-1-before.jpg";
  const after3 =
    "	https://sculptperio.com/wp-content/uploads/2022/11/implants-case-1-after.jpg";

  return (
    <div className="mainWrapper">
    <div className="t_head">
        <h6>PATIENT</h6>
        <h4>Transformations</h4>
    </div>
      <div className="contentWrapper">
      <div className="imgc1">
        <ReactCompareImage leftImage={before} rightImage={after} /></div>
          <div className="imgc2">
        <ReactCompareImage leftImage={before2} rightImage={after2} />
        </div>
      </div>
      <div className="contentWrapper">
      <div className="imgc1">
        <ReactCompareImage leftImage={before3} rightImage={after3} /></div>
          <div className="imgc2">
        <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
   
      
    </div>
  );
}

export default Transformation