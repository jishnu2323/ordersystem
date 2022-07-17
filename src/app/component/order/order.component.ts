import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  closeResult = '';
  newOrdersClicked = false;

  orders = [
    { ordernumber: '1' ,orderduedate:'17/07/2022' ,name: 'Jishnu', address: 'Kerala',Number:'9988776655',ordertotal:'3'},
    { ordernumber: '2' ,orderduedate:'18/07/2022' ,name: 'Rolex', address: 'Tamilnadu',Number:'9988796658',ordertotal:'1'},
    { ordernumber: '3' ,orderduedate:'19/07/2022' ,name: 'Mahi', address: 'Hyderabad',Number:'9988787665',ordertotal:'10'},
  ];

  color;

  constructor(
    private modalService:NgbModal 
  ) { }

  ngOnInit() {

  }

  model: any = {};
  model2: any = {}; 

  addOrders() {
    this.orders.push(this.model);
    this.model = {};
  }

  deleteOrders(i) {
    alert("Are you sure want to delete this order")
    this.orders.splice(i);
    console.log(i);
  }

  myValue;

  editOrders(ordersInfo) {
    this.model2.name = this.orders[ordersInfo].name;
    this.model2.orderduedate = this.orders[ordersInfo].orderduedate;
    this.model2.address = this.orders[ordersInfo].address;
    this.model2.Number = this.orders[ordersInfo].Number;
    this.model2.ordertotal = this.orders[ordersInfo].ordertotal;
    this.model2.ordernumber = this.orders[ordersInfo].ordernumber;
    this.myValue = ordersInfo;
  }
  updateOrder() {
    let ordersInfo = this.myValue;
    for(let i = 0; i < this.orders.length; i++) {
      if(i == ordersInfo) {
        this.orders[i] = this.model2;
        this.model2 = {};
      }
    }
  }
  addNewOrdersBtn() {
    this.newOrdersClicked = !this.newOrdersClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6'; 
     }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
}
}
