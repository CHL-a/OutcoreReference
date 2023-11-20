// abstracts
/**
 * Short error function
 * @param {string?} s 
 * @throws {Error} message
 */
function error(s){throw new Error(s || 'An error occured.')}

/**
 * Checks if value is non falsy, errors if it is falsy and 
 * returns `v` if not
 * @template A 
 * @param {A} v value to be checked
 * @param {string?} m message, refer to error.
 * @param {any?} jsF jsF is a marker, where if `true`, will 
 * use javascript's definition of falsy. If unmarked, falsy will check only undefined, null or false.
 * @returns {A} returned v
 */
function assert(v, m, jsF){
	if (!jsF) 
		if (v === undefined || v === null || v === false) 
			error(m);
	else if (!v)
		error(m)

	return v
}

/**
 * Checks if `v` exists within environment.
 * @template {A}
 * @param {A} v
 * @returns {boolean}
 */
function vDoesExist(v){return !!v}

/**
 * Checks if method does exist
 * @template {A}
 * @param {A?} v 
 * @param {string} mn 
 * @returns {A}
 */
function assertExistance(v, mn){
	return assert(v, "Method does not exist:" + mn)
}

/**
 * * Mind that this type of object construction only works in that type of game 
 * * returns an object refering to a coin worker.
 * @class
 */
function CoinWorker(){
	this.name = 'CoinWorker';
}

/**
 * Moves worker `x` units forward. Uses `x` steps.
 * @param {number?} x Default: 1
 * @see CoinWorker
 */
CoinWorker.prototype.moveForward = function(x){
	x = x || 1

	for (let i = 0; i < x; i++) MoveForward()
}

/**
 * Rotates worker `x` units right. Uses `x` steps
 * @param {number?} x Default: 1
 */
CoinWorker.prototype.turnRight = function(x){
	x = x || 1
	const right = assertExistance(TurnRight, 'TurnRight')

	for (let i = 0; i < x; i++) right()
}

/**
 * Turns worker left. Uses 1 step if TurnLeft is bought and 3 
 * steps otherwise because it uses [TurnRight]{@tutorial } thrice as a 
 * substitute.
 * @see {@link CoinWorker}
 */
CoinWorker.prototype.turnLeft = function(){
	if (vDoesExist(TurnLeft))
		TurnLeft()
	else
		this.turnRight(3)
}

/**
 * Turns around worker. Consumes two steps.
 */
CoinWorker.prototype.turnAround = function(){this.turnRight(2)}

/**
 * Spins worker. Consumes four steps.
 */
CoinWorker.prototype.spin = function(){this.turnRight(4)}

/**
 * Worker does nothing for `x` steps.
 * @param {number?} x Default: 1
 */
CoinWorker.prototype.doNothing = function(x){
	x = x || 1
	const nothing = assertExistance(DoNothing, "Donothing")

	for (let i = 0; i < x; i++) nothing()
}

/**
 * Returns a list of object names that worker has. Newest 
 * objects are at the end of the list and the names are in form 
 * of Camelcase. Because the game is small, it contains any of
 * these objects:
 * * coin
 * * redCoin
 * * *a special coin, which will be named later.
 * Consumes 1 step.
 * @returns {string[]}
 */
CoinWorker.prototype.getWorkerInventoryItems = function(){
	return assertExistance(
		GetWorkerInventoryItems, 
		'GetWorkerInventoryItems'
	)()
}

/**
 * Does the same as getWorkerInventoryItems.
 */
CoinWorker.prototype.getInventory = function(){
	return this.getWorkerInventoryItems()
}

/**
 * Does the same as `console.log`. Mind that `s` must be 
 * strictly a string.
 * 
 * Likely consumes one step.
 * @param {string} s 
 */
CoinWorker.prototype.log = function(s){
	assertExistance(ConsoleLog,'ConsoleLog')(s)
}


/**
 * Returns the volume which inventory holds.
 * @returns {number}
 */
CoinWorker.prototype.getInventoryVol = function(){
	return this.getInventory().length
}

/**
 * Does the same as getInventoryVol. Method name is subjected to * change.
 */
CoinWorker.prototype.getWeight = function(){
	return this.getInventoryVol()
}

/**
 * Waits and dumps all items from worker inventory, assuming they
 * are on some form of deposit. Consumes `n` steps from each item 
 * present, at least one step is consumed to check for inventory.
 */
CoinWorker.prototype.depositAllItems = function(){
	while (this.getInventoryVol() > 0) {}
}

/**
 * Dumps all regular coins. Consumes `n` steps from all present
 * regular coins, minimum 1 step.
 */
CoinWorker.prototype.depositAllRegCoins = function(){
	while (true) {
		let inv = this.getWorkerInventoryItems()

		let i
		for (i = 0; i < inv.length; i++) {
			if (inv[i] == 'coin')
				break;
		}

		if (inv.length == i) return;
	}
}

/** 
 * Does the same as depositAllRegCoins but only deposits five 
 * coins maximum to prevent infinite yielding. Consumes [1,5]
 * steps.
*/
CoinWorker.prototype.convertToRed = function(){
	const inv = me.getWorkerInventoryItems()

	let dumped = 1

	for (let i = 1; i < inv.length; i++) {
		if (inv[i] == 'coin') {
			dumped ++;
			me.doNothing()
		}
		
		if (dumped >= 5) {
			break;
		}
	}
}

/**
 * Checks of all workers call this function. Consumes one step.
 * @returns {boolean}
 */
CoinWorker.prototype.isSync = function(){
	return assertExistance(SyncWorkers, 'SyncWorkers')()
}

/**
 * Worker throws item at index `i`, of 0-based list from 
 * inventory. Consumes [1,2] steps.
 * 
 * Does not have case where worker dumps nothing.
 * 
 * @param {number?} i The index of list, 
 * will dump newest item and add another step for consumption.
 * @returns {string} item name
 */
CoinWorker.prototype.throwItem = function(i){
	if (i != undefined)
		return assertExistance(ThrowItem,'ThrowItem')(i)

	return this.throwItem(this.getInventoryVol() - 1)
}

/**
 * Yields worker until all workers call isSync. 
 * Best used if a worker is already on a deposit.
 * Consumes `n` steps.
 */
CoinWorker.prototype.sync = function(){while(!this.isSync()){}}

/** 
 * Counts all red coins present in inventory. Consumes one step.
 * @returns {number}
*/
CoinWorker.prototype.countRedCoins = function(){
	let inventory = me.getWorkerInventoryItems()
	let result = 0

	for (let i = 0; i < inventory.length; i++) 
		if (inventory[i] == 'redCoin') 
			result++;
	
	return result
}

/**
 * Worker attempts to throw an item and checks if they did throw 
 * it. Consumes 3 steps, so use wisely.
 * @param {number?} x index to throw item
 * @returns {[boolean, string]}
 */
CoinWorker.prototype.safeThrow = function(x){
	let len = this.getInventoryVol()

	let result = this.throwItem(x)

	return [len != this.getInventoryVol(), result]
}