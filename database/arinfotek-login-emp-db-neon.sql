--
-- PostgreSQL database dump
--

\restrict xtazW8CRIOk5fH1qqg2XLjhSqspVsE163xd9Y82xuAeIDvDuuvoQ6zz06jTGWgN

-- Dumped from database version 17.10 (9f6157c)
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.employee (
    employee_id integer NOT NULL,
    employee_code character varying(50),
    first_name character varying(100),
    last_name character varying(100),
    gender character varying(20),
    date_of_birth date,
    mobile character varying(20),
    email character varying(150),
    address text,
    department character varying(100),
    designation character varying(100),
    role character varying(100),
    joining_date date,
    employment_type character varying(50),
    salary numeric(12,2),
    status character varying(50) DEFAULT 'Active'::character varying,
    manager_name character varying(150),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.employee OWNER TO neondb_owner;

--
-- Name: employee_employee_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.employee_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employee_employee_id_seq OWNER TO neondb_owner;

--
-- Name: employee_employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.employee_employee_id_seq OWNED BY public.employee.employee_id;


--
-- Name: login; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.login (
    login_id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    role character varying(50)
);


ALTER TABLE public.login OWNER TO neondb_owner;

--
-- Name: login_login_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.login_login_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.login_login_id_seq OWNER TO neondb_owner;

--
-- Name: login_login_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.login_login_id_seq OWNED BY public.login.login_id;


--
-- Name: student; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.student (
    student_id integer NOT NULL,
    reg_no character varying(20) NOT NULL,
    student_name character varying(100) NOT NULL,
    dob date,
    course character varying(50),
    email character varying(100),
    login_id integer
);


ALTER TABLE public.student OWNER TO neondb_owner;

--
-- Name: student_student_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.student_student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.student_student_id_seq OWNER TO neondb_owner;

--
-- Name: student_student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.student_student_id_seq OWNED BY public.student.student_id;


--
-- Name: employee employee_id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.employee ALTER COLUMN employee_id SET DEFAULT nextval('public.employee_employee_id_seq'::regclass);


--
-- Name: login login_id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.login ALTER COLUMN login_id SET DEFAULT nextval('public.login_login_id_seq'::regclass);


--
-- Name: student student_id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.student ALTER COLUMN student_id SET DEFAULT nextval('public.student_student_id_seq'::regclass);


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.employee (employee_id, employee_code, first_name, last_name, gender, date_of_birth, mobile, email, address, department, designation, role, joining_date, employment_type, salary, status, manager_name, created_at, updated_at) FROM stdin;
1	EMP001	John	Doe	Male	1990-05-14	9876543210	john.doe@example.com	123 Main Street	Development	Senior Developer	Developer	2020-01-10	Full-Time	25000.00	Active	Sarah Lee	2026-06-27 16:20:51.937348	2026-06-27 16:20:51.937348
2	EMP002	Jane	Smith	Female	1992-08-20	9765432109	jane.smith@example.com	456 Park Avenue	HR	HR Manager	Manager	2019-04-15	Full-Time	22000.00	Active	Michael Clark	2026-06-27 16:20:51.937348	2026-06-27 16:20:51.937348
4	3	DINESH	M	\N	\N	\N	dineshdineshdd2005@gamil.com	\N	HR	\N	\N	\N	\N	\N	Active	\N	2026-06-27 16:24:42.331947	2026-06-27 16:24:42.331947
3	EMP003	Mike	Johnson	\N	\N	\N	mike.johnson@example.com	\N	Accounts	\N	\N	\N	\N	\N	Pending	\N	2026-06-27 16:20:51.937348	2026-06-27 16:27:57.060475
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.login (login_id, username, password, role) FROM stdin;
1	arun	pass123	ADMIN
2	priya	pass456	EMPLOYEE
3	kavin	pass789	INTERN
\.


--
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.student (student_id, reg_no, student_name, dob, course, email, login_id) FROM stdin;
1	2025001	Arun Kumar	2005-05-15	BCA	arun@gmail.com	1
2	2025002	Priya Devi	2004-12-10	BSc CS	priya@gmail.com	2
3	2025003	Kavin Raj	2005-08-20	BCom	kavin@gmail.com	3
\.


--
-- Name: employee_employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.employee_employee_id_seq', 5, true);


--
-- Name: login_login_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.login_login_id_seq', 3, true);


--
-- Name: student_student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.student_student_id_seq', 3, true);


--
-- Name: employee employee_email_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_email_key UNIQUE (email);


--
-- Name: employee employee_employee_code_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_employee_code_key UNIQUE (employee_code);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (employee_id);


--
-- Name: login login_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY (login_id);


--
-- Name: login login_username_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_username_key UNIQUE (username);


--
-- Name: student student_email_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_email_key UNIQUE (email);


--
-- Name: student student_login_id_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_login_id_key UNIQUE (login_id);


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (student_id);


--
-- Name: student student_reg_no_key; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_reg_no_key UNIQUE (reg_no);


--
-- Name: student student_login_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_login_id_fkey FOREIGN KEY (login_id) REFERENCES public.login(login_id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

\unrestrict xtazW8CRIOk5fH1qqg2XLjhSqspVsE163xd9Y82xuAeIDvDuuvoQ6zz06jTGWgN

