
# DonorHub

DonorHub is a comprehensive platform designed to bridge the gap
          between blood donors, hospitals, and organizations. By offering a
          user-friendly interface and powerful tools, DonorHub ensures that the
          life-saving process of blood donation becomes smoother, faster, and
          more accessible to everyone involved.

Consists of 4 different users -- **Donar**,**Hospital**,**Organisation** and **Admin**


## Salient Features
- 4 different dashboards (Donar,Hospital,Organisation,Admin)
- Analytics Page for Blood Records
- Secured Authentication using JWT
- Role based Authentication





## Functionalities in each dashboard

***Donar Dashboard:***

Upon successfull SignUp and Login, Donar is able to monitor the detials of organisations that he/she had donated and also the details of donations that he/she has done so far.

***Hospital Dashboard:***

Upon successfull SignUp and Login, Hospital is able to monitor the list of organisations that it is associated with and also the list of consumers details who has utilised the blood so far.

***Organisations Dashboard:***

Upon successfull SignUp and Login, Organisations
- can add the blood-in and blood-out data
- can monitor the details of Donars
- can monitor the detais of hospitals
- can analyse the blood records using ***Analytics Page***

***Admin Dashboard:***

- Admin can monitor Details of Donars
- Admin can monitor Details of hospitals
- Admin can monitor Details of Organisations
- Admin can also delete any of donars, hospitals and organisations if required.
## Install Packages and Run the App

After successfully cloning my GitHub Repo, type the below command in integrated terminal in the same directory as that of the project.

```bash
  npm i
```

The above command ensures to install all the required packages.

Repeat the above process in client directory too.

Type the below command to run the application

```bash
  npm run dev
```  