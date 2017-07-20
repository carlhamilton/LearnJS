const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.20;
const PHONE_PRICE = 369.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 500.00;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "£" + amount.toFixed( 2 );
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// buy a new phone!
	amount = amount + PHONE_PRICE;

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
	"Your purchase: " + formatAmount( amount )
);
<<<<<<< HEAD

=======
>>>>>>> 2cd248edaf706ea3ce6f2f0ac4534b6299cac6bc

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase. :("
	);
}
// You can't afford this purchase. :(
