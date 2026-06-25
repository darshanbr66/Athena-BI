const KPICards = ({ data }) => {

if (!data || data.length === 0) {
return null;
}

const firstRow = data[0];

const keys = Object.keys(firstRow);

const labelKey = keys[0];
const valueKey = keys[1];

return ( <div
   className="
     grid
     grid-cols-1
     md:grid-cols-3
     gap-4
   "
 >


  <div
    className="
      bg-slate-900
      p-5
      rounded-xl
    "
  >
    <h3 className="text-slate-400">
      Total Results
    </h3>

    <p className="text-3xl font-bold">
      {data.length}
    </p>
  </div>

  <div
    className="
      bg-slate-900
      p-5
      rounded-xl
    "
  >
    <h3 className="text-slate-400">
      Top Value
    </h3>

    <p className="text-3xl font-bold">
      {firstRow[labelKey]}
    </p>
  </div>

  <div
    className="
      bg-slate-900
      p-5
      rounded-xl
    "
  >
    <h3 className="text-slate-400">
      Highest Count
    </h3>

    <p className="text-3xl font-bold">
      {firstRow[valueKey]}
    </p>
  </div>

</div>


);
};

export default KPICards;
