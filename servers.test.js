describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });


  it('should update serverTable()', function(){
    submitServerInfo();
    updateServerTable();

    let list = document.querySelectorAll('#serverTable tbody tr td');
    

    expect(list[0].innerText).toBe('Alice');
    expect(list[1].innerText).toEqual('$0.00');
    expect(list[2].innerText).toEqual('X');
  });


  afterEach(function() {
    serverNameInput.value = '';
    serverName.value = '';
    serverTbody.innerText = '';
    // teardown logic
  });
});

