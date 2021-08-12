// @desc    Get all transactions
// @route   GET /ap1/v1/transactions
// @access  public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
};

// @desc    Add transaction
// @route   POST /ap1/v1/transactions
// @access  public
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
};

// @desc    Delete all transactions
// @route   DELETE /ap1/v1/transactions
// @access  public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
};