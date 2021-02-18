import { Controller } from 'stimulus';
import $ from 'jquery'

export default class extends Controller {
  static targets = ['list', 'total', 'subTotal', 'tax', 'tip'];

  initialize() {
    console.log('Order Controller Initialized!');
  }

  add(event) {
    const target = $(event.target);
    const productElement = target.closest('[name=product]');
    const template = productElement.find('[type="text/template"]').html();
    this.list.prepend(template);
    this.updateTotals();
  }

  remove(event) {
    const target = $(event.target);
    target.closest('[name=product]').detach();
    this.updateTotal();
  }

  updateTotals() {
    this.updateSubTotal();
    this.updateTax();
    this.updateTotal();

  }

  updateTax() {
    $(this.taxTarget).text(this.tax);
  }

  updateSubTotal() {
    let total = 0;

    $(this.list.find('tr[name=product]')).each(function() {
      total += $(this).data('price');
    });

    this.subTotal = total.toFixed(2);
  }

  updateTotal() {
    const total = this.subTotal + this.tax + this.tip;
    this.total = total;
  }

  get list() {
    return $(this.listTarget);
  }

  get tax() {
    return this.total * 0.087;
  }

  get tip() {
    return 0;
  }

  get total() {
    return parseFloat($(this.subTotalTarget).text());
  }

  set total(total) {
    $(this.totalTarget).text(total);
  }

  set subTotal(total) {
    $(this.subTotalTarget).text(total);
  }

  get subTotal() {
    return parseFloat($(this.subTotalTarget).text());
  }
}
