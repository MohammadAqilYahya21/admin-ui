import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Datatable from "../../components/mydatatable/Mydatatable";

const Mylist = () => {
  return (
    <div className="mylist">
      <Sidebar />
        <div className="mylistContainer">
            <Navbar />
            <div className="widgets">
                <Widget type="user" />
                <Widget type="order" />
            </div>
            <Datatable/>
        </div>
    </div>
  );
};

export default Mylist;