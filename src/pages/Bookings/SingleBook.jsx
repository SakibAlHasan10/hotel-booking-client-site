import useFind from "../../hooks/GetHook/useFind";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import moment from "moment";
const SingleBook = ({ book, refetch }) => {
  const axiosFind = useFind();
  const {
    _id,
    id,
    title,
    booking,
    // email,
    price,
    // size,
    img,
  } = book;

  const array = { ...booking };
  const toObj = array[0];

  //   console.log(booking, arrayToObj[0])
  const currentDate = moment().date(Number);
  const currentDate2 = currentDate._d;

  const bookingDate = moment(currentDate2).format("DD/MM/YYYY");
  // console.log(bookingDate);
  let admission = moment(`${toObj}`, "DD/MM/YYYY");
  let discharge = moment(`${bookingDate}`, "DD/MM/YYYY");
  const deferenceDate = admission.diff(discharge, "days");

  // console.log(deferenceDate);
  // console.log(admission,discharge);

  const handleDeleteBooking = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosFind.delete(`/remove/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your room has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  // const handleReviewId=()=>{
  //   setReviewId('')
  //   setReviewId(id)
  //   console.log(id)
  //   console.log(reviewId)
  // }
  //   console.log(Object.keys(book).join(','))
  // console.log(Object.keys(book).join(","));

  // axiosFind.delete(`/remove/${_id}`).then((res) => {
  //   console.log(res.data)
  // })
  // const hhh = getDateDiff('{date2}','{date1}','y')
  return (
    <div className=" border  mb-5  p-4 gap-3 rounded-lg">
      <div className="flex">
        <img src={img} alt="" className="h-36 w-40 rounded-lg mr-4" />
        <div className="md:flex">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>USD {price}</p>
            {/* <p>{size}</p> */}
            <p>{booking[0]}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-6/12 lg:w-10/12 mx-auto mt-4 gap-2 md:gap-3">
        <Link to={`/update/${_id}`}>
          <button className="btn btn-outline border-2 hover:border-white border-primaryColor hover:bg-primaryColor">
            change date
          </button>
        </Link>
        <button
          disabled={deferenceDate <= 1}
          onClick={handleDeleteBooking}
          className={`btn bg-primaryColor hover:bg-blue-600
             text-white`}
        >
          Delete
        </button>
        <Link to={`review/${id}`}>
          <button className="btn btn-outline border-2 hover:border-white border-primaryColor hover:bg-primaryColor">
            add review
          </button>
        </Link>
        {/* <button onClick={handleReviewId}>
            hhhh
          </button> */}
        {/* <Reviews id={id}>
            </Reviews> */}
      </div>
    </div>
  );
};
SingleBook.propTypes = {
  book: PropTypes.object,
  refetch: PropTypes.func,
};
export default SingleBook;
