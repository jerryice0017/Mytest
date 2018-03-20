from flask import Flask, render_template, request, session
import pymysql
app = Flask(__name__)
app.secret_key = "session"

# Connect to database
db = pymysql.connect("localhost", "root", "kenny1998", "website", autocommit=True)
cursor = db.cursor()

@app.route('/')
def index():
	return render_template('index.html') # return to Homepage

@app.route('/food_menu')
def food_menu():
	return render_template('food_menu.html') # return to Food Menu

@app.route('/online_booking')
def online_booking():
	return render_template('online_booking.html') # return to Online Booking

@app.route('/inspect_booking')
def inspect_booking():
	try:
		my_booking = ("SELECT Number_of_guests, `Date`, `Time`, Special_request FROM Online_booking WHERE Username ='" + session['username_cookie'] + "' ORDER BY `Date` ASC")
		cursor.execute(my_booking)

		booking_column = list()

		for row in cursor:
			booking_column.append(row)

		return render_template('inspect_booking.html', booking_column = booking_column)
	except (KeyError, UnboundLocalError):
		pass

	return render_template('inspect_booking.html') # return to Inspect Booking

@app.route('/sign_in')
def sign_in():
	return render_template('sign_in.html') # return to Sign In

@app.route('/sign_up')
def sign_up():
	return render_template('sign_up.html') # return to Sign Up

@app.route('/sign_up_success', methods=['GET','POST'])
def sign_up_success():
	if request.method == 'POST':
		sign_up_username_get = request.form['sign_up_username']
		sign_up_password_get = request.form['sign_up_password']
		sign_up_name_get = request.form['sign_up_name']
		sign_up_gender_get = request.form['sign_up_gender']
		sign_up_phone_get = request.form['sign_up_phone']
		sign_up_email_get = request.form['sign_up_email']

		check_username = ("SELECT Username FROM Sign_up WHERE Username ='" + sign_up_username_get + "'")
		check_username_value = str(cursor.execute(check_username))

		if (check_username_value == "1"):
			return render_template('sign_up.html', username_same_ac = "1")
		else:
			sign_up_insert = ("INSERT INTO Sign_up VALUES ('" + sign_up_username_get + "', '" + sign_up_password_get + "', '" + sign_up_name_get + "', '" + sign_up_gender_get + "', '" + sign_up_phone_get + "', '" + sign_up_email_get + "')") 
			cursor.execute(sign_up_insert)
			return render_template('sign_in.html', sign_up_success_ok = "1")

@app.route('/sign_in_success', methods=['GET', 'POST'])
def sign_in_success():
	if request.method == 'POST':
		sign_in_username_get = request.form['sign_in_username']
		sign_in_password_get = request.form['sign_in_password']

		check_username_login = ("SELECT Username FROM Sign_up WHERE Username ='" + sign_in_username_get + "'")
		check_password_login = ("SELECT Password FROM Sign_up WHERE Username ='" + sign_in_username_get + "'")
		check_username_login_value = str(cursor.execute(check_username_login))

		cursor.execute(check_password_login)
		for row in cursor:
			check_password_login_value = row[0] # get password

		cursor.execute(check_username_login)
		for row in cursor:
			session_username = row[0] # get username

		name_get = ("SELECT Name FROM Sign_up WHERE Username ='" + sign_in_username_get + "'")
		phone_get = ("SELECT Phone FROM Sign_up WHERE Username ='" + sign_in_username_get + "'")

		cursor.execute(name_get)
		for row in cursor:
			session_name = row[0] # get name

		cursor.execute(phone_get)
		for row in cursor:
			session_phone = row[0] # get phone			

		if (check_username_login_value == "1" and sign_in_password_get == check_password_login_value):
			session['username_cookie'] = session_username
			session['password_cookie'] = check_password_login_value
			session['name_cookie'] = session_name
			session['phone_cookie'] = session_phone

			return render_template('index.html')
		else:
			return render_template('sign_in.html', login_fail = "1")

@app.route('/sign_out')
def sign_out():
	# remove session data
	session.pop('username_cookie', None)
	session.pop('password_cookie', None)
	session.pop('name_cookie', None)
	session.pop('phone_cookie', None)
	return render_template('sign_in.html')

@app.route('/my_account')
def my_account():
	return render_template('my_account.html') # return to My Account

@app.route('/my_account_edit', methods=['GET', 'POST'])
def my_account_edit():
	if request.method == 'POST':
		my_account_password_get = request.form['my_account_password']
		my_account_phone_get = request.form['my_account_phone']

		check_password = ("SELECT Password FROM Sign_up WHERE Username ='" + session['username_cookie'] + "'")
		cursor.execute(check_password)
		for row in cursor:
			check_password_value = row[0]

		if (my_account_password_get == check_password_value):
			return render_template('my_account.html', password_same = "1")
		else:
			session.pop('password_cookie', None)
			
			update_password = ("UPDATE Sign_up SET Password='" + my_account_password_get + "'" + " WHERE Username='" + session['username_cookie'] + "'")
			cursor.execute(update_password)

			# Update password
			new_password_get = ("SELECT Password FROM Sign_up WHERE Username ='" + session['username_cookie'] + "'")
			cursor.execute(new_password_get)
			for row in cursor:
				new_password_value = row[0] # get password

			session['password_cookie'] = new_password_value

			if (my_account_phone_get != ""):
				session.pop('phone_cookie', None)

				update_phone = ("UPDATE Sign_up SET Phone='" + my_account_phone_get + "'" + " WHERE Username='" + session['username_cookie'] + "'")
				cursor.execute(update_phone)

				# Update phone
				new_phone_get = ("SELECT Phone FROM Sign_up WHERE Username ='" + session['username_cookie'] + "'")
				cursor.execute(new_phone_get)
				for row in cursor:
					new_phone_value = row[0] # get phone

				session['phone_cookie'] = new_phone_value

			return render_template('my_account.html', update_success = "1")

@app.route('/online_booking_success', methods=['GET', 'POST'])
def online_booking_success():
	if request.method == 'POST':
		online_booking_number_of_guests_get = request.form['online_booking_number_of_guests']
		online_booking_date_get = request.form['online_booking_date']
		online_booking_time_get = request.form['online_booking_time']
		online_booking_special_request_get = request.form['online_booking_special_request']

		check_booking_exist = ("SELECT `Date`, `Time` FROM Online_booking WHERE Username = '" + session['username_cookie'] + "' AND `Date` = '" + online_booking_date_get + "' AND `Time` = '" + online_booking_time_get + "'")
		check_booking_exist_value = str(cursor.execute(check_booking_exist))

		if (check_booking_exist_value == "1"):
			return render_template('online_booking.html', booking_exist = "1")
		else:
			booking_success = ("INSERT INTO Online_booking VALUES ('" + session['username_cookie'] + "', '" + online_booking_number_of_guests_get + "', '" + online_booking_date_get + "', '" + online_booking_time_get + "', '" + online_booking_special_request_get + "')")
			cursor.execute(booking_success)
			return render_template('online_booking.html', booking_success_ok = "1")

if __name__ == '__main__':
	app.run(debug = True)