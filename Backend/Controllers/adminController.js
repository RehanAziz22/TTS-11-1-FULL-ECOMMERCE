const adminModel = require("../Models/AdminSchema")

const adminController = {
    getAdmin: async (req, res) => {
        const { id } = req.params
        const admin = await adminModel.findById(id)

        if (!admin) {
            res.json({
                message: "Admin not found"
            })
        } else {
            res.json({
                message: "Admin found",
                data: admin
            })
        }
    },
    getAllAdmins: async (req, res) => {
        const admins = await adminModel.find()
        if (admins.length > 0) {
            res.json({
                message: "Users found",
                data: admins
            })
        } else {
            res.json({
                message: "No admins found"
            })
        }
    },
    signupAdmin: async (req, res) => {
        const { firstName, lastName, email, password } = req.body
        console.log(req.body)
        // Validate the data
        if (!firstName || !lastName || !email || !password) {
            res.json({
                message: "Please fill in all fields"
            })
        } else {
            // Check if admin already exists
            const admin = await adminModel.findOne({ email })
            if (admin) {
                res.json({
                    message: "Admin already exists with this email address"
                })
            } else {
                // Create new admin
                const newAdmin = new adminModel({
                    firstName,
                    lastName,
                    email,
                    password
                })

                newAdmin.save()
                res.json({
                    message: "Admin created successfully",
                    data: newAdmin
                })

            }
        }

    },
    loginAdmin: async (req, res) => {
        const { email, password } = req.body

        // Validate the data
        if (!email || !password) {
            res.json({
                message: "Please fill in all fields"
            })
        } else {
            // Check if admin already exists
            const admin = await adminModel.findOne({ email })
            if (admin) {

                // Check if password matches
                if (admin.password === password) {
                    res.json({
                        message: "Logged in successfully",
                        data: admin
                    })
                } else {
                    res.json({
                        message: "Incorrect password"
                    })
                }

            } else {

                res.json({
                    message: "account doesnot exist please signup first"
                })

            }
        }

    },
    updateAdmin: async (req, res) => {
        const { id } = req.params
        const { firstName, lastName, email, password } = req.body

        const objToSend = { firstName, lastName, email, password }
        const updateAdmin = await adminModel.findByIdAndUpdate(id, objToSend, { new: true })
        if (updateAdmin) {
            res.json({
                message: "Admin updated successfully",
                data: updateAdmin
            })
        } else {
            res.json({
                message: "something went wrong"
            })
        }
    },
    deleteAdmin: async (req, res) => {
        const { id } = req.params
        const deleteAdmin = await adminModel.findByIdAndDelete(id)

        if (deleteAdmin) {
            res.json({
                message: "Admin deleted successfully",
                data: deleteAdmin
            })
        } else {
            res.json({
                message: "something went wrong"
            })
        }
    },
}


module.exports = adminController