document.addEventListener('DOMContentLoaded', () => {

	const calcParent = document.querySelector('.calc')
	const currentTotalPrice = document.querySelector('.current-price')
	const nextTotalBuyPriceElem = document.querySelector('.next-price')
	const calcInputs = document.querySelectorAll('[data-calc]')

	const formatPrice = new Intl.NumberFormat('ru-RU')
	const regEXPBanString = /[^\d]/g
	const regExpCountStr = /(^0+)|(\W+$)/gmi
	const maxCount = 200

	const PRICE_LIST = {
		BOTTLE_PRICE: 400,
		COOLER_PRICE: 4000,
		NEXT_BUY_BOTTLE_PRICE: 500,
	};
	
	const _priceInvoice = ( inputs = [] ) => {
		let _total = Array.from(inputs).reduce( ( acc, inp ) => {
			const typePrice = inp.dataset?.['type']
			return acc += inp?.value.replace(regExpCountStr, '') * PRICE_LIST[typePrice]
		}, 0)

		return formatPrice.format(_total)
	}
	
	function writeTotalPrice( inp, inputs ) {
		const _countBottleElem = document.querySelector(`[data-type="BOTTLE_PRICE"]`)
		inp.value = inp.value.replace(regEXPBanString, '');
		inp.value >= maxCount ? inp.value = maxCount : true

		currentTotalPrice.innerHTML = _priceInvoice(inputs)
		
		const _totalNextPrice = _countBottleElem?.value.replace(regExpCountStr, '') * PRICE_LIST['NEXT_BUY_BOTTLE_PRICE']
		nextTotalBuyPriceElem.innerHTML = formatPrice.format(_totalNextPrice)
		inp.value += ' шт'
	}

	calcParent?.addEventListener('input', (e) => writeTotalPrice(e.target, calcInputs))

	
})