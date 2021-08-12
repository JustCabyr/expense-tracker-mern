const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /ap1/v1/transactions
// @access  public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
};

// @desc    Add transaction
// @route   POST /ap1/v1/transactions
// @access  public
exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction');
};

// @desc    Delete all transactions
// @route   DELETE /ap1/v1/transactions
// @access  public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
};